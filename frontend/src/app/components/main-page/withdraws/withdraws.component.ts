import { Component } from '@angular/core';

@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrls: ['./withdraws.component.css']
})
export class WithdrawsComponent {
  withdrawAmount: number;
  errorMessage: string | undefined = undefined;

  constructor(){
    this.withdrawAmount=0;
  }

  withdrawMoney(){
    if(this.withdrawAmount % 10 != 0 || this.withdrawAmount == 0)
      alert('invalid ammount')
    else{
      alert("done")
    }
  }
}
