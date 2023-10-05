import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  //Variables
  entity: string;
  reference: string;
  amount: number
  errorMessage: string | undefined = undefined;

  constructor(private paymentService:OperationsService,private titleService:Title,
    private router:Router, private snackBar: MatSnackBar){
    this.entity="";
    this.reference="";
    this.amount=0;
    this.titleService.setTitle('Pagamentos Serviços')
  }

  //Function that calls paymentService and pays, if amount > available funds returns error on screen
  makePayment() {
    this.paymentService.payment(this.entity, this.reference, this.amount).subscribe({
      next: (data) => {
        if(data && data.status == true){
          console.log(data);
          this.router.navigate(['dashboard'])

        }
      },
      error: (error) =>{
        if(error.status == 400){
          this.snackBar.open('Fundos Isuficientes', 'Fechar', {
            duration: 1500,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
        }
        
      },
      complete: () => console.info('Payment Made') 
  })
}
}
