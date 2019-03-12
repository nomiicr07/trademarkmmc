import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomapanyComponent } from './addcomapany.component';

describe('AddcomapanyComponent', () => {
  let component: AddcomapanyComponent;
  let fixture: ComponentFixture<AddcomapanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcomapanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomapanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
