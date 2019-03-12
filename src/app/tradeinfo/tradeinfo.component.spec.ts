import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeinfoComponent } from './tradeinfo.component';

describe('TradeinfoComponent', () => {
  let component: TradeinfoComponent;
  let fixture: ComponentFixture<TradeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
