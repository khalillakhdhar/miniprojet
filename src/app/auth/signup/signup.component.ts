import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/classes/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
}
