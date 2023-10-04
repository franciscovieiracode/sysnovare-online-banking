import { Component } from '@angular/core';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent {

  depositAmount:undefined
  errorMessage:string | undefined = undefined;
  
  constructor(){
  }

  depositFunds(){
    alert("deposited")
  }
}
