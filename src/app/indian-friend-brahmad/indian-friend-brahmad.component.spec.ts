import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianFriendBrahmadComponent } from './indian-friend-brahmad.component';

describe('IndianFriendBrahmadComponent', () => {
  let component: IndianFriendBrahmadComponent;
  let fixture: ComponentFixture<IndianFriendBrahmadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianFriendBrahmadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianFriendBrahmadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
