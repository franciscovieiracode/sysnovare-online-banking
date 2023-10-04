import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

const endpoint = 'http://localhost:3000/api/v1/money-management/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient, private router:Router) { }

  //Add Balance to account
  addBalance(ammount:number):Observable<any>{
    return this.http.post(endpoint+"add-balance",new addBalanceModel(ammount)).pipe(catchError(this.handleError));
  }

  //Withdraw money
  withdrawMoney(){
    
  }

  handleError(error:HttpErrorResponse) {
    return throwError(() => {
        return error;
    });
  }

}

export class addBalanceModel{
  constructor(ammount:number){}
}