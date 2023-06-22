import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Employee } from 'src/app/shared/classes/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employee=new Employee();
  employees=new Array<Employee>();
  grade=""

  constructor(private router: Router, private employeeService: EmployeeService)
  {
    this.getEmployees();
   let us=JSON.parse(localStorage.getItem("current")||'')||"";
   this.grade=us.grade
console.log("grade",this.grade)
  }
signup()
{
  this.employee.grade="user";

  this.employeeService.addEmployee(this.employee).subscribe((data)=>
  {
    console.log("utilisateur ajouté!",data);
    this.employee=new Employee();
  })
}
getEmployees()
{
  this.employeeService.getEmployees().subscribe((data)=>
  {
    this.employees=data;
    console.log("utilisateur",this.employees);
  })
}
deleteEmployee(employee :any)
{
  if(confirm(`vous voulez supprimer l'employée ${employee.nom} ${employee.prenom}`))
  this.employeeService.deleteEmployee(employee.id).subscribe((data)=>
  {
    console.log("supprimé!",employee);
    this.getEmployees();


  }
  )

}
}
