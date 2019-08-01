import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable2Component } from './observable2.component';

describe('Observable2Component', () => {
  let component: Observable2Component;
  let fixture: ComponentFixture<Observable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
