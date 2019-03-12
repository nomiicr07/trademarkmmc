import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserteamComponent } from './userteam.component';

describe('UserteamComponent', () => {
  let component: UserteamComponent;
  let fixture: ComponentFixture<UserteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
