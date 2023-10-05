import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/main-page/dashboard/dashboard.component';
import { FooterComponent } from './components/main-page/footer/footer.component';
import { HeaderComponent } from './components/main-page/header/header.component';
import { SidebarComponent } from './components/main-page/sidebar/sidebar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthStatusComponent } from './components/auth/auth-status/auth-status.component';
import { AuthInterceptorInterceptor } from './interceptors/auth';
import { TransfersComponent } from './components/main-page/transfers/transfers.component';
import { DepositsComponent } from './components/main-page/deposits/deposits.component';
import { PaymentsComponent } from './components/main-page/payments/payments.component';
import { CellphonePaymentComponent } from './components/main-page/cellphone-payment/cellphone-payment.component';
import { WithdrawsComponent } from './components/main-page/withdraws/withdraws.component';
import { ContactsComponent } from './components/footer-info/contacts/contacts.component';
import { TermsAndConditionsComponent } from './components/footer-info/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/footer-info/privacy-policy/privacy-policy.component';
import { MovimentsComponent } from './components/main-page/moviments/moviments.component';
import { MovimentsTableComponent } from './components/main-page/moviments/moviments-table/moviments-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    AuthStatusComponent,
    TransfersComponent,
    DepositsComponent,
    PaymentsComponent,
    CellphonePaymentComponent,
    WithdrawsComponent,
    ContactsComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    MovimentsComponent,
    MovimentsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    DatePipe,
    MatSnackBarModule
  ],
  providers: [AuthStatusComponent,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
