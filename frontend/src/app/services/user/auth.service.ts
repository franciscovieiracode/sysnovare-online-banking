import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';

const endpoint = 'http://localhost:3000/api/v1/auth/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  //Login
  login(email:string, password:string):Observable<any>{

    return this.http.post<any>(endpoint+"login", new LoginModel(email, password)).pipe(catchError(this.handleError));
  }

  //Signup
  signup(firstName:string, lastName:string, email:string,password:string):Observable<any>{
    return this.http.post<any>(endpoint+"signup", new RegisterModel(firstName, lastName,email,password)).pipe(catchError(this.handleError));
  }

  //Error Handler
  handleError(error:HttpErrorResponse) {
    return throwError(() => {
        return error;
    });
  }
}

//Class to Signup
export class RegisterModel{
  constructor(public firstName:string, public lastName:string, public email:string,
    public password:string ){}
}

//Class to login
export class LoginModel{
  constructor(public email:string, public password:string){}

}
