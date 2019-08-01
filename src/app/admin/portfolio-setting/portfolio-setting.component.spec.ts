import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliSettinggComponent } from './portfolio-setting.component';

describe('PortfoliSettinggComponent', () => {
  let component: PortfoliSettinggComponent;
  let fixture: ComponentFixture<PortfoliSettinggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliSettinggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliSettinggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
