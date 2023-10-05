import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

const endpoint = 'http://localhost:3000/api/v1/profile/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) { }

  //Get Profile info
  getCurrentProfile():Observable<any>{
    return this.http.get(endpoint+"get-profile",httpOptions)
    .pipe(catchError(this.handleError));
  }

  //Get Profile movements
  getMovements():Observable<any>{
    return this.http.get(endpoint+"get-moviments",httpOptions)
    .pipe(catchError(this.handleError));
  }

  //Error Handler
  handleError(error:HttpErrorResponse) {
    return throwError(() => {
        return error;
    });
  }

}
