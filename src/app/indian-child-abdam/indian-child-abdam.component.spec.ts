import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianChildAbdamComponent } from './indian-child-abdam.component';

describe('IndianChildAbdamComponent', () => {
  let component: IndianChildAbdamComponent;
  let fixture: ComponentFixture<IndianChildAbdamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianChildAbdamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianChildAbdamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
