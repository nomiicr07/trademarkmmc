import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrademarkComponent } from './user-trademark.component';

describe('UserTrademarkComponent', () => {
  let component: UserTrademarkComponent;
  let fixture: ComponentFixture<UserTrademarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrademarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
