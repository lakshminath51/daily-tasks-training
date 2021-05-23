import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EMPLOYEES } from '../employee.mock';
import {Employee} from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit  {
employees: Employee[];
  
  constructor(private employeeService:EmployeeService, private router: Router) {}
    ngOnInit(): void {
      this.employeeService.getAllEmployees().subscribe(data=> {
        this.employees=data;
      });
    }

    updateEmployee(employee: Employee): void{
      localStorage.removeItem('id');
      localStorage.setItem('id', employee.id.toString());
      this.router.navigate(['update-employees']);
    }
    deleteEmployee(employee: Employee): void {
      this.employeeService.deleteEmployeeById(employee.id).subscribe();
      this.employees=this.employees.filter(e=>e !==employee);
    }
}
