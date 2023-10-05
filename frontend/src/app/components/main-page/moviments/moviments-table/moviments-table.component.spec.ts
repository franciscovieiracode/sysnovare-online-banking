import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentsTableComponent } from './moviments-table.component';

describe('MovimentsTableComponent', () => {
  let component: MovimentsTableComponent;
  let fixture: ComponentFixture<MovimentsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentsTableComponent]
    });
    fixture = TestBed.createComponent(MovimentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
