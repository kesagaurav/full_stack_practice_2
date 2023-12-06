import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

const routes: Routes = [
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'updateEmployee/:id',component:UpdateEmployeeComponent},
  {path:'viewEmployee',component:ViewEmployeesComponent},
  // {path:'**',redirectTo:'/addEmployee',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
