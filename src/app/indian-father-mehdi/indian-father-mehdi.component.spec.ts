import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianFatherMehdiComponent } from './indian-father-mehdi.component';

describe('IndianFatherMehdiComponent', () => {
  let component: IndianFatherMehdiComponent;
  let fixture: ComponentFixture<IndianFatherMehdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianFatherMehdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianFatherMehdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
