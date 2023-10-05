import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-cellphone-payment',
  templateUrl: './cellphone-payment.component.html',
  styleUrls: ['./cellphone-payment.component.css']
})
export class CellphonePaymentComponent {
  selectedProvider: string;
  phoneNumber: string;
  amount: number;
  errorMessage: string | undefined = undefined;

  //Add later to db
  providers: string[] = ['Vodafone', 'Meo', 'Nos'];


  constructor(private phonePaymentService:OperationsService){
    this.selectedProvider=""
    this.phoneNumber=""
    this.amount=0;
  }

  makePhonePayment(){
    this.phonePaymentService.phonePayment(this.selectedProvider, this.phoneNumber, this.amount).subscribe({
      next: (data) => {
        if(data && data.status == true){
          console.log(data);
        }
      },
      error: (error) =>{
        console.log(error.error);
        
      },
      complete: () => console.info('Payment Made') 
  })
}
}
