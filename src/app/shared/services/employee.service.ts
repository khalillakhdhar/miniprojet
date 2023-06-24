import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../classes/employee';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
public loggedInStatus: boolean = false;
  url: string="http://localhost:8080/employee"
  constructor(private http:HttpClient,private db: AngularFirestore) { }
getEmployees()
{

  return this.http.get<Employee[]>(this.url);
}
addEmployee(employee:Employee )
{
  let emp=Object.assign({},employee); // convertir la classe en objet
  this.db.collection("Employee").add(emp);
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
login()
{
  this.loggedInStatus=true;
}
}
