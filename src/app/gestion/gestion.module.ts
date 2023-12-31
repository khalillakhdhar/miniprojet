import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { EmployeesComponent } from './employees/employees.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionComponent,
    EmployeesComponent,
    CategoriesComponent,
    ProfileComponent,

  ],
  imports: [
  CommonModule,
    GestionRoutingModule,
    FormsModule
  ]
})
export class GestionModule { }
