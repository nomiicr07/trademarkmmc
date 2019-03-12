import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitelawyerComponent } from './invitelawyer.component';

describe('InvitelawyerComponent', () => {
  let component: InvitelawyerComponent;
  let fixture: ComponentFixture<InvitelawyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitelawyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitelawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
