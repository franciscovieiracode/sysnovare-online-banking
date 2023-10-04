import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router:Router){}

  dashboard(){
    this.router.navigate(['dashboard']);
  }

  transfers(){
    this.router.navigate(['transfers']);
  }

  deposits(){
    this.router.navigate(['deposits'])
  }

  payment(){
    this.router.navigate(['payments'])
  }

  phonePayment(){
    this.router.navigate(['phone-payment'])
  }
}
