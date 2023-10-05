import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-cellphone-payment',
  templateUrl: './cellphone-payment.component.html',
  styleUrls: ['./cellphone-payment.component.css']
})
export class CellphonePaymentComponent {
  //Variables to handle login
  selectedProvider: string;
  phoneNumber: string;
  amount: number;
  errorMessage: string | undefined = undefined;

  //Add later to db, list of providers
  providers: string[] = ['Vodafone', 'Meo', 'Nos'];


  constructor(private phonePaymentService:OperationsService, private router:Router,
    private titleService:Title, private snackBar: MatSnackBar){
    this.selectedProvider=""
    this.phoneNumber=""
    this.amount=0;
    this.titleService.setTitle('Carregamento Telemóvel')
  }

  //Function to make phone payment, calls phonePaymentService, done if funds are bigger than amount to pay
  makePhonePayment(){
    this.phonePaymentService.phonePayment(this.selectedProvider, this.phoneNumber, this.amount).subscribe({
      next: (data) => {
        if(data && data.status == true){
          console.log(data);
          this.router.navigate(['dashboard'])
        }
      },
      //If amount > available funds send error to screen
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
