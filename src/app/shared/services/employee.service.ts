import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../classes/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string="http://localhost:8080/employee"
  constructor(private http:HttpClient) { }
getEmployees()
{
  return this.http.get<Employee[]>(this.url);
}
addEmployee(employee:Employee )
{
return this.http.post<Employee>(this.url, employee);
}
deleteEmployee(id:number)
{
  return this.http.delete<Employee>(`${this.url}/${id}`)
}
authentifier(employee:Employee )
{
return this.http.post<Employee[]>(this.url+"/auth", employee);
}
}
