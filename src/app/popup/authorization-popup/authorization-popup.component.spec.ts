import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationPopupComponent } from './authorization-popup.component';

describe('AuthorizationPopupComponent', () => {
  let component: AuthorizationPopupComponent;
  let fixture: ComponentFixture<AuthorizationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
