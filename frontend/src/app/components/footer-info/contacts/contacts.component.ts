import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
