import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ask2Component } from './ask2.component';

describe('Ask2Component', () => {
  let component: Ask2Component;
  let fixture: ComponentFixture<Ask2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ask2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
