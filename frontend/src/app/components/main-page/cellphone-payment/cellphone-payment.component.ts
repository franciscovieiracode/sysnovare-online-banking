import { Component } from '@angular/core';

@Component({
  selector: 'app-cellphone-payment',
  templateUrl: './cellphone-payment.component.html',
  styleUrls: ['./cellphone-payment.component.css']
})
export class CellphonePaymentComponent {
  selectedProvider: string;
  phoneNumber: string;
  amount: undefined;
  errorMessage: string | undefined = undefined;

  //Add later to db
  providers: string[] = ['Vodafone', 'Meo', 'Nos'];


  constructor(){
    this.selectedProvider=""
    this.phoneNumber=""
  }

  makePhonePayment(){
    alert('payed')
  }
}
