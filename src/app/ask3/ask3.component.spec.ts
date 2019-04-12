import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ask3Component } from './ask3.component';

describe('Ask3Component', () => {
  let component: Ask3Component;
  let fixture: ComponentFixture<Ask3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ask3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
