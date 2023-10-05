import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user/auth.service';
import { AuthStatusComponent } from '../auth-status/auth-status.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Variables to handle login
  email: string;
  password: string;
  errorMessage:string | undefined = undefined;


  constructor(private router:Router, private loginStatus: AuthStatusComponent,private titleService:Title,
    private authService:AuthService) {
    this.email="";
    this.password="";
    this.titleService.setTitle('Login')
   }

   //Checks before everything if has token, if it has,redirects to dashboard 
   ngOnInit(): void {
    if(this.loginStatus.getStatus() == true)
      this.router.navigate(["/dashboard"])
  }

  //login function,calls authService and store a jwt token
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
        
        if(error.status == 401){
          this.errorMessage = "Wrong credentials"
          setTimeout(()=>{this.errorMessage =""},2000)
        }
        else {
          this.errorMessage ="Please try again later"
        }
      },
      complete: () => console.info('Auth completed') 
  })
  }


}
