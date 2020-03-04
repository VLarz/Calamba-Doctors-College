import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEducationComponent } from './basic-education.component';

describe('BasicEducationComponent', () => {
  let component: BasicEducationComponent;
  let fixture: ComponentFixture<BasicEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
