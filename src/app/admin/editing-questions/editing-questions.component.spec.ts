import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingQuestionsComponent } from './editing-questions.component';

describe('EditingQuestionsComponent', () => {
  let component: EditingQuestionsComponent;
  let fixture: ComponentFixture<EditingQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
