import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/classes/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employee=new Employee();

  constructor(private router: Router, private employeeService: EmployeeService)
  {
    this.employee.grade="user";
  }
signup()
{
  this.employeeService.addEmployee(this.employee).subscribe((data)=>
  {
    console.log("utilisateur ajouté!",data);
    this.employee=new Employee();
  })
}
getEmployees()
{

}
}
