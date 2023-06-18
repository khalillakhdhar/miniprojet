import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './gestion.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeesComponent } from './employees/employees.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path: '', redirectTo: 'profile',pathMatch:'full'},
  { path: '', component: GestionComponent,
children:[
  {
    path: 'profile',component: ProfileComponent
  },
  {
    path: 'employees',component:EmployeesComponent
  },
  {
    path: 'categories',component:CategoriesComponent
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
