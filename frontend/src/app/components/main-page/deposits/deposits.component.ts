import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/money-management/operations.service';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent {

  depositAmount:number
  errorMessage:string | undefined = undefined;
  
  constructor(private depositService:OperationsService, private router:Router){
    this.depositAmount=0;
  }

  depositFunds(){
    this.depositService.addBalance(this.depositAmount).subscribe({
      next: (data) => {
        if(data && data.status == true){
          console.log(data);
          this.router.navigate(['dashboard'])
        }
      },
      error: (error) =>{
        console.log(error.error);
        
      },
      complete: () => console.info('Added Ammount') 
  })
  }

}
