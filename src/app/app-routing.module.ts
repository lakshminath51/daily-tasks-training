import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { SingleemployeeComponent } from './singleemployee/singleemployee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
// import { UserserviceService } from './service/userservice.service';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserUpdateComponent } from './user-update/user-update.component';


const routes: Routes = [
  {path: '', component: UserComponent}, 
  {path:'add-user', component: AddUserComponent}, 
  // {path:'employee/:id', component:  SingleemployeeComponent},
  {path:'update-users', component: UserUpdateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }