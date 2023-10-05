import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/main-page/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { TransfersComponent } from './components/main-page/transfers/transfers.component';
import { DepositsComponent } from './components/main-page/deposits/deposits.component';
import { PaymentsComponent } from './components/main-page/payments/payments.component';
import { CellphonePaymentComponent } from './components/main-page/cellphone-payment/cellphone-payment.component';
import { WithdrawsComponent } from './components/main-page/withdraws/withdraws.component';
import { MovimentsComponent } from './components/main-page/moviments/moviments.component';
import { LoginStatusGuard } from './guards/login-status.guard';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent, canActivate:[LoginStatusGuard]},
  {path:'', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'transfers', component:TransfersComponent, canActivate:[LoginStatusGuard]},
  {path:'deposits', component:DepositsComponent, canActivate:[LoginStatusGuard]},
  {path:'payments',component:PaymentsComponent, canActivate:[LoginStatusGuard]},
  {path:'phone-payment',component:CellphonePaymentComponent, canActivate:[LoginStatusGuard]},
  {path:'withdraw',component:WithdrawsComponent, canActivate:[LoginStatusGuard]},
  {path:'moviments', component:MovimentsComponent, canActivate:[LoginStatusGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
