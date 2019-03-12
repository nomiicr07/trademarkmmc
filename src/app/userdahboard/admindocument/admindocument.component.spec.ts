import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindocumentComponent } from './admindocument.component';

describe('AdmindocumentComponent', () => {
  let component: AdmindocumentComponent;
  let fixture: ComponentFixture<AdmindocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
