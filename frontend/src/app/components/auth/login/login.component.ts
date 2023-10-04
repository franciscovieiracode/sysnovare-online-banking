import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user/auth.service';
import { AuthStatusComponent } from '../auth-status/auth-status.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  errorMessage:string | undefined = undefined;
  wrong:boolean


  constructor(private router:Router, private loginStatus: AuthStatusComponent,
    private authService:AuthService) {
    this.email="";
    this.password="";
    this.wrong=false
   }

   ngOnInit(): void {
    if(this.loginStatus.getStatus() == true)
      this.router.navigate(["/dashboard"])
  }

  login(){

    this.authService.login(this.email, this.password).subscribe({
      next: (data) => {
        if(data && data.status == true){
          console.log(data);
          localStorage.setItem("currentUser",JSON.stringify(data.token))
          this.router.navigate(["/dashboard"])
        }
      },
      error: (error) =>{
        console.log(error.error);
        
        if(error.status == 400){
          this.errorMessage = "Wrong credentials"
          this.wrong=true
          setTimeout(()=>{this.wrong=false},3000)
        }
        else {
          this.errorMessage ="Please try again later"
        }
      },
      complete: () => console.info('Auth completed') 
  })
  }


}
