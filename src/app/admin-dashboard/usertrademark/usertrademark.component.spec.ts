import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertrademarkComponent } from './usertrademark.component';

describe('UsertrademarkComponent', () => {
  let component: UsertrademarkComponent;
  let fixture: ComponentFixture<UsertrademarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertrademarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
