import { Component } from '@angular/core';
import { Employee } from '../../shared/classes/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  currentUser=JSON.parse(localStorage.getItem("current")||'')||"";
  constructor(private employeeService:EmployeeService)
  {
    console.log("me", this.currentUser);

  }
  updateUser()
  {
    this.employeeService.addEmployee(this.currentUser).subscribe(employee =>
      {
        localStorage.setItem("current",JSON.stringify(employee));
        console.log("updated",employee);
      }
      )

  }


}
