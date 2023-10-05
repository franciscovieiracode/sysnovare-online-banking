import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsComponent } from '../../footer-info/contacts/contacts.component';
import { TermsAndConditionsComponent } from '../../footer-info/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from '../../footer-info/privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public dialog: MatDialog) {}

  openContacts() {
    const dialogRef = this.dialog.open(ContactsComponent, {
      minWidth: '850px',
      minHeight: '300px',
    });
  }

  openTermsAndConditions() {
    const dialogRef = this.dialog.open(TermsAndConditionsComponent, {
      minWidth: '950px',
      minHeight: '500px',
    });
  }

  openPrivacyPolicies() {
    const dialogRef = this.dialog.open(PrivacyPolicyComponent, {
      minWidth: '850px',
      minHeight: '600px',
    });
  }
}
