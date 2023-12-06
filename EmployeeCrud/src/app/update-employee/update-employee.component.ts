import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  employeeForm!:FormGroup;
  employee!:Employee;
  message!:string;
  id!:number;
  erroMessage!:string;
  constructor(private fb:FormBuilder,private service:EmployeeServiceService,private router:Router,private acroute:ActivatedRoute){
  }
  ngOnInit(): void {
    this.id=this.acroute.snapshot.params['id'];
    this.service.getById(this.id).subscribe(res=>{
      this.employee=res;
    },
    error=>{
      alert("somehting went worng");
    })

  }


  updateEmployee(e:Employee){
    this.service.updateEmployee(this.employee).subscribe({
          next:data=>{
            this.employee=data;
            console.log(data);
            this.router.navigate(['/viewEmployee']);
          }

    })
  }





  }





