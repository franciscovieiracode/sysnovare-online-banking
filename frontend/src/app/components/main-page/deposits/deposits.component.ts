import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent {

  depositAmount:number
  errorMessage:string | undefined = undefined;
  
  constructor(private addBalance:OperationsService){
    this.depositAmount=0;
  }

  depositFunds(){
    this.addBalance.addBalance(this.depositAmount).subscribe({
      next: (data) => {
        if(data && data.status == true){
          console.log(data);
        }
      },
      error: (error) =>{
        console.log(error.error);
        
      },
      complete: () => console.info('Added Ammount') 
  })
  }

}
