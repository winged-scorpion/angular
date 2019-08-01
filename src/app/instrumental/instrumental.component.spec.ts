import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentalComponent } from './instrumental.component';

describe('InstrumentalComponent', () => {
  let component: InstrumentalComponent;
  let fixture: ComponentFixture<InstrumentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
