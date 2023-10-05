import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrls: ['./withdraws.component.css']
})
export class WithdrawsComponent {
  //Variables
  withdrawAmount: number;
  errorMessage: string | undefined = undefined;

  constructor(private withdrawService:OperationsService, private titleService:Title,
    private router:Router, private snackBar: MatSnackBar){
    this.withdrawAmount=0;
    this.titleService.setTitle('Levantamentos')
  }

  //Function to withdraw money, has to be divided by 10(bank policy) and > 0, if some of those fail error is sent to screen
  withdrawMoney(){
    //Amount has to be > 0 and diveded by 10
    if (this.withdrawAmount % 10 !== 0 || this.withdrawAmount == 0) {
      this.snackBar.open('Montante Inválido', 'Fechar', {
        duration: 1500,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
      
    }else{
        this.withdrawService.withdrawMoney(this.withdrawAmount).subscribe({
          next: (data) => {
            if(data && data.status == true){
              console.log(data);
              this.router.navigate(['dashboard'])
            }
          },
          error: () =>{
            this.snackBar.open('Montante Inválido', 'Fechar', {
              duration: 1500,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            });           
          },
          complete: () => console.info('Withdraw Completed') 
      })
      
    }
  }
}
