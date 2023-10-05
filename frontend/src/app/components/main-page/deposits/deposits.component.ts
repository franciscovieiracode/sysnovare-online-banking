import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent {

  //Variables to handle deposit
  depositAmount:number
  errorMessage:string | undefined = undefined;
  
  constructor(private depositService:OperationsService, private router:Router,
    private titleService:Title, private snackBar: MatSnackBar){
    this.depositAmount=0;
    this.titleService.setTitle('Depósitos')
  }

  //Function to deposit balance, sends amount
  depositFunds(){
    this.depositService.addBalance(this.depositAmount).subscribe({
      next: (data) => {
        if(data && data.status == true){
          console.log(data);
          this.router.navigate(['dashboard'])
        }
      },
      error: (error) =>{
        //If amount <=0 sends error to screen
        if(error.status == 400){
          this.snackBar.open('Montate Inválido', 'Fechar', {
            duration: 1500,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
        }
        
      },
      complete: () => console.info('Added Ammount') 
  })
  }

}
