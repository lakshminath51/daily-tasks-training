import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

// import * as EventEmitter from 'events';
// import { OutgoingMessage } from 'http';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() countFromParent: number;
  employee: Employee;
  @Output() countFromChild = new EventEmitter<number>();
  signupForm: FormGroup;
  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      id: new FormControl(this.countFromParent, Validators.required),
      password: new FormControl(null, Validators.required), 
      name: new FormControl(null, Validators.required), //Note we can add more than one validator, if we have email we can add validator for the email.
      address: new FormControl(null, Validators.required), 
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    this.countFromChild.emit(this.countFromParent+5);
    this.employeeService.createEmployee(this.signupForm.value).subscribe(data=>{
      console.log("Data added Successfully");      
      this.router.navigate(['']);  
    });
    console.log(this.signupForm);


  }
}
