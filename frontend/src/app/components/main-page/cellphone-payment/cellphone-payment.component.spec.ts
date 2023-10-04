import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellphonePaymentComponent } from './cellphone-payment.component';

describe('CellphonePaymentComponent', () => {
  let component: CellphonePaymentComponent;
  let fixture: ComponentFixture<CellphonePaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellphonePaymentComponent]
    });
    fixture = TestBed.createComponent(CellphonePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
