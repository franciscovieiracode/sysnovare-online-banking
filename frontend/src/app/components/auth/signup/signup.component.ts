import { Component } from '@angular/core';
import { AuthStatusComponent } from '../auth-status/auth-status.component';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: string;
  password: string;
  firstName: string;
  lastName: string
  showFillFieldsMessage = false;
  errorMessage:string | undefined = undefined;
  wrong:boolean



  constructor( private router:Router, private loginStatus: AuthStatusComponent,
    private titleService:Title, private authService: AuthService
) {
    this.email="";
    this.password="";
    this.firstName="";
    this.lastName="";
    this.wrong=false
    this.titleService.setTitle("Registo")
   }

   ngOnInit(): void {
    if(this.loginStatus.getStatus() == true)
      this.router.navigate(["/dashboard"])
  }

  signup():void{
    this.authService.signup(this.firstName, this.lastName, this.email, this.password).subscribe({
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
          this.errorMessage = "User already registed"
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

  login(){
    this.router.navigate(['login'])
  }

}
