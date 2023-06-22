import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/classes/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
employee=new Employee();
currentEmployee:any;
constructor(private router: Router, private employeeService: EmployeeService)
{
  console.log('auth',employeeService.loggedInStatus);

}
authentifier()
{
this.employeeService.authentifier(this.employee).subscribe(emp =>
  {
    this.currentEmployee=emp;
    console.log("current: ", this.currentEmployee);
    if(this.currentEmployee==null)
    alert("compte non reconnu");
    else
    {
      localStorage.setItem("current",JSON.stringify(this.currentEmployee));
      this.employeeService.login();
      window.location.replace("../gestion")
    }

  })

}
}
