import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {PortfolioSettingComponent} from './portfolio-setting.component';

describe('PortfoliSettinggComponent', () => {
  let component: PortfolioSettingComponent;
  let fixture: ComponentFixture<PortfolioSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
