import { Component } from '@angular/core';
import { CategorieService } from './shared/services/categorie.service';
import { EmployeeService } from './shared/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniprojet';

  constructor(private categorieapi:CategorieService, private employeeapi:EmployeeService)
  {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
