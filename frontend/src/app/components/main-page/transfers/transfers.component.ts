import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent {
  nomeDestinatario: string;
  iban: string;
  amount:number
  description:string
  errorMessage:string | undefined = undefined;
  wrong:boolean

  constructor(private transferService:OperationsService ) {
      this.nomeDestinatario="";
      this.amount=0
      this.iban="";
      this.wrong=false
      this.description=""
  }

  transfer() {
    this.transferService.transfer(this.nomeDestinatario, this.amount, this.iban, this.description).subscribe({
      next: (data) => {
        if(data && data.status == true){
          console.log(data);
        }
      },
      error: (error) =>{
        console.log(error.error);
        
      },
      complete: () => console.info('Transfer Completed') 
  })
    
  }
}
