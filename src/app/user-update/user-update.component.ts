import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private userService: UserserviceService, private router: Router) { }
  updateForm: FormGroup;
  ngOnInit(): void {
    this.updateForm=new FormGroup({
      id: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required), 
      username: new FormControl(null, Validators.required), //Note we can add more than one validator, if we have email we can add validator for the email.
      phone: new FormControl(null, Validators.required)
    });
    const id=localStorage.getItem('id')
    if(+id > 0) {
        this.userService.getUserById(+id).subscribe(data=>  {
          this.updateForm.patchValue(data);
        })
    }
  }
  onSubmit(): void {
    this.userService.updateUser(this.updateForm.value).subscribe(data=> {
        console.log(data);  
        this.router.navigate(['']);
    });
  }

}
