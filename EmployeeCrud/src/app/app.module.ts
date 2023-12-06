import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from './employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
