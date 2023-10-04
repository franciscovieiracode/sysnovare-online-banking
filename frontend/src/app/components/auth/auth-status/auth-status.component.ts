import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-status',
  templateUrl: './auth-status.component.html',
  styleUrls: ['./auth-status.component.css']
})
export class AuthStatusComponent {

  getStatus(){
    let isLogin = false

    if(localStorage.getItem("currentUser") != null){
      isLogin = true
    }
    return isLogin
  }


}
