import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router:Router){}

  //Redirects to Dashboard Component
  dashboard(){
    this.router.navigate(['dashboard']);
  }

  //Redirects to Transfers Component
  transfers(){
    this.router.navigate(['transfers']);
  }

  //Redirects to Deposits Component
  deposits(){
    this.router.navigate(['deposits'])
  }

  //Redirects to Payments Component
  payment(){
    this.router.navigate(['payments'])
  }

  //Redirects to Phone Payment Component
  phonePayment(){
    this.router.navigate(['phone-payment'])
  }

  //Redirects to Withdraw Component
  withdraw(){
    this.router.navigate(['withdraw'])
  }
}
