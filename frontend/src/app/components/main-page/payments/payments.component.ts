import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  entity: string;
  reference: string;
  amount: undefined
  errorMessage: string | undefined = undefined;

  constructor(){
    this.entity="";
    this.reference="";
  }

  makePayment() {
    alert("pago")
  }
}
