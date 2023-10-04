import { Component } from '@angular/core';
import { AuthStatusComponent } from '../../auth/auth-status/auth-status.component';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authStatus:AuthStatusComponent, public authService:AuthService,
    private router:Router){}

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
