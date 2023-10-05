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
  addBalance(amount:number):Observable<any>{
    return this.http.put(endpoint+"add-balance",new addBalanceModel(amount)).pipe(catchError(this.handleError));
  }

  //Withdraw money
  withdrawMoney(amount:number):Observable<any>{
    return this.http.put(endpoint+"withdraw-balance",new withdralwMoneyModel(amount)).pipe(catchError(this.handleError));
  }

  //Transfer money
  transfer(name:string, amount:number, iban:string, description?:string):Observable<any>{
    return this.http.post(endpoint+"transfer",new transferModel(name, amount, iban, description)).pipe(catchError(this.handleError));
  }

  //Payments
  payment(entity:string, reference:string, amount:number):Observable<any>{
    return this.http.post(endpoint+"payment",new paymentModel(entity, reference, amount,)).pipe(catchError(this.handleError));
  }  

  //Phone Payment
  phonePayment(provider:string, number:string, amount:number):Observable<any>{
    return this.http.post(endpoint+"phone-payment",new phonePaymentModel(provider, number, amount,)).pipe(catchError(this.handleError));
  }    

  handleError(error:HttpErrorResponse) {
    return throwError(() => {
        return error;
    });
  }

}

export class addBalanceModel{
  constructor(public amount:number){}
}

export class withdralwMoneyModel{
  constructor(public amount:number){}
}

export class transferModel{
  constructor(public name:string,public amount:number, public iban:string, public description?:string){}
}

export class paymentModel{
  constructor(public entity:string,public reference:string, public amount:number){}
}

export class phonePaymentModel{
  constructor(public provider:string,public number:string, public amount:number){}
}