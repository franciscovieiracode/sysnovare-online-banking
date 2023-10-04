import { Component } from '@angular/core';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent {
  nomeDestinatario: string;
  iban: string;
  ammount:undefined
  description:string
  errorMessage:string | undefined = undefined;
  wrong:boolean

  constructor() {
      this.nomeDestinatario="";
      this.iban="";
      this.wrong=false
      this.description=""
  }

  transfer() {
    alert('123')
    
  }
}
