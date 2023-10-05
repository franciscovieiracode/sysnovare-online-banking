import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentsComponent } from './moviments.component';

describe('MovimentsComponent', () => {
  let component: MovimentsComponent;
  let fixture: ComponentFixture<MovimentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentsComponent]
    });
    fixture = TestBed.createComponent(MovimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
