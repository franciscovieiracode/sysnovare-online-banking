import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  entity: string;
  reference: string;
  amount: number
  errorMessage: string | undefined = undefined;

  constructor(private paymentService:OperationsService){
    this.entity="";
    this.reference="";
    this.amount=0;
  }

  makePayment() {
    this.paymentService.payment(this.entity, this.reference, this.amount).subscribe({
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
