import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroComponeteComponent } from './primeiro-componete.component';

describe('PrimeiroComponeteComponent', () => {
  let component: PrimeiroComponeteComponent;
  let fixture: ComponentFixture<PrimeiroComponeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeiroComponeteComponent]
    });
    fixture = TestBed.createComponent(PrimeiroComponeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
