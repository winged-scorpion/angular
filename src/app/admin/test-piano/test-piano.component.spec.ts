import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPianoComponent } from './test-piano.component';

describe('TestPianoComponent', () => {
  let component: TestPianoComponent;
  let fixture: ComponentFixture<TestPianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
