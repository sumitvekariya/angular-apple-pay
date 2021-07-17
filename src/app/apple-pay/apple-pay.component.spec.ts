import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplePayComponent } from './apple-pay.component';

describe('ApplePayComponent', () => {
  let component: ApplePayComponent;
  let fixture: ComponentFixture<ApplePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplePayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
