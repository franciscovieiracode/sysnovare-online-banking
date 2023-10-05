import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/user/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  //Profile variable
  profile:any

  constructor(public getProfile:ProfileService,private titleService:Title,
     public router: Router){
      this.titleService.setTitle('Dashboard')
     }

    //Calls getProfile OnInit to show profile when component is loaded
    ngOnInit(): void {
      this.getProfile.getCurrentProfile().subscribe({
        next: (data) => {
          if (data && data.status == true) {
            console.log(data);
            this.profile = data.customer
          }
        },
        complete: () => console.info('Profile load completed')
      })
    }

    moviments(){
      this.router.navigate(['moviments'])
    }

}
