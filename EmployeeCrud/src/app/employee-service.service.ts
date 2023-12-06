import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
url='';
  constructor(private http:HttpClient) {
    this.url="http://localhost:9090/employee";
   }

   addEmployee(e:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url,e);
   }

   updateEmployee(e:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.url,e);
   }
   deleteEmployee(id:number):Observable<any>{
    return this.http.delete(this.url +  `/${id}` );
   }


   getById(id:number):Observable<any>{
    return this.http.get(this.url + `/${id}`);
   }

   getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + 's');
   }
}
