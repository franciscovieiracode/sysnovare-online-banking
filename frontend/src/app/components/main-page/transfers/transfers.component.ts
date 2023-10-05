import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent {
  //Variables
  nomeDestinatario: string;
  iban: string;
  amount:number
  description:string
  errorMessage:string | undefined = undefined;
  wrong:boolean

  constructor(private transferService:OperationsService, private titleService:Title,
    private router:Router, private snackBar: MatSnackBar) {
      this.nomeDestinatario="";
      this.amount=0
      this.iban="";
      this.wrong=false
      this.description=" "
      this.titleService.setTitle('Transferências')
  }

  //Function to make a transfer, if amount > available or iban does not exist sends error to screen
  transfer() {
    this.transferService.transfer(this.nomeDestinatario, this.amount, this.iban, this.description).subscribe({
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
        else{
          this.snackBar.open('Iban Inválido', 'Fechar', {
            duration: 1500,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
        }
        
        
      },
      complete: () => console.info('Transfer Completed') 
  })
    
  }
}
