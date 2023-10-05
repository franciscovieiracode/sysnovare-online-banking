import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent {
  constructor(
    public dialogRef: MatDialogRef<TermsAndConditionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
