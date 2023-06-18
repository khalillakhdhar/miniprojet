import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {

  deconnexion()
  {
    localStorage.clear();
    window.location.replace("/auth")
  }


}
