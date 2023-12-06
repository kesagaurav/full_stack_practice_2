import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
  employee!:Employee[];
  message!:string;
  constructor(private service:EmployeeServiceService){}
  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.service.getAllEmployees().subscribe(res=>{
      this.employee=res;
    })
  }


  delete(id:number){
    //debugger
    this.service.deleteEmployee(id).subscribe(
      {
        next:data=>{
          console.log(data);
          alert('data is deleting');
          const i=this.employee.findIndex(a=>a.eid==id);
          if(i!=-1){
            this.employee.slice(i,1);
          }


        this.message=`the employee is deleted successfully ${id}`;
        alert(this.message);
        this.getAllEmployees();
        },
        error:err=>{
          console.log('error');

        },
        complete:()=>{
          console.log('compleetd succsslly');

        }
      }

    )
  }

}
