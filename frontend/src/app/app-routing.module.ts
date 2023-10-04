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

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'transfers', component:TransfersComponent},
  {path:'deposits', component:DepositsComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'phone-payment',component:CellphonePaymentComponent},
  {path:'withdraw',component:WithdrawsComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
