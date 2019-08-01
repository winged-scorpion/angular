import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPortfolioItemComponent } from './add-portfolio-item.component';

describe('AddPortfolioItemComponent', () => {
  let component: AddPortfolioItemComponent;
  let fixture: ComponentFixture<AddPortfolioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPortfolioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPortfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
