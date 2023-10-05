import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrls: ['./withdraws.component.css']
})
export class WithdrawsComponent {
  withdrawAmount: number;
  errorMessage: string | undefined = undefined;

  constructor(private withdrawService:OperationsService){
    this.withdrawAmount=0;
  }

  withdrawMoney(){
    if(this.withdrawAmount % 10 != 0 || this.withdrawAmount == 0)
      alert('invalid ammount')
    else{
        this.withdrawService.withdrawMoney(this.withdrawAmount).subscribe({
          next: (data) => {
            if(data && data.status == true){
              console.log(data);
            }
          },
          error: (error) =>{
            console.log(error.error);
            
          },
          complete: () => console.info('Withdraw Completed') 
      })
      
    }
  }
}
