import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStatusComponent } from '../components/auth/auth-status/auth-status.component';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusGuard implements CanActivate {
  constructor(private LoginStatus: AuthStatusComponent, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.LoginStatus.getStatus() == false){
        this.router.navigate(['login'])
        return false
      }
    
    
    return true;
  }
  
}
