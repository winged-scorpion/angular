import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWorkComponent } from './nav-work.component';

describe('NavWorkComponent', () => {
  let component: NavWorkComponent;
  let fixture: ComponentFixture<NavWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
