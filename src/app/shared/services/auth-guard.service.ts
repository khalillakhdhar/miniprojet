import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(route:Router) { }
  canActivate():boolean {
    if(localStorage.getItem("current"))
    return true;
    else

    {
      window.location.replace("../auth")
       return false;

    }
  }
}
