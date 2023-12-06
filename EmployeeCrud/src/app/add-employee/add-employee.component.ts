import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employeeForm!:FormGroup;
  private employee!:Employee;
  message!:string;
  erroMessage!:string;


  constructor(private fb:FormBuilder,private service:EmployeeServiceService,private router:Router){
    this.employee=new Employee();
  }
  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      userName:['',[Validators.required,Validators.min(6)]],
      desc:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      salary:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      address:['',[Validators.required]]
    })
    console.log(this.employeeForm.value);

  }

  addEmployee(){
      this.service.addEmployee(this.employeeForm.value).subscribe(
        {
          next:data=>{

            console.log(this.employeeForm.value);

            this.router.navigate(['/viewEmployee']);
            this.message=`successfully the employee is added to database`;
            console.log(this.message);

          },error:err=>{
            this.erroMessage='something went wrong !';

          },
          complete:()=>{
            console.log('successfully it has been rediredted to view-employee component');

          }
        }
      )
  }

}
