import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzorooComponent } from './ngzoroo.component';

describe('NgzorooComponent', () => {
  let component: NgzorooComponent;
  let fixture: ComponentFixture<NgzorooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzorooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzorooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
