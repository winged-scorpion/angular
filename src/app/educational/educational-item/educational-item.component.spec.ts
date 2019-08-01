import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalItemComponent } from './educational-item.component';

describe('EducationalItemComponent', () => {
  let component: EducationalItemComponent;
  let fixture: ComponentFixture<EducationalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
