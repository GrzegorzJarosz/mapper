import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmatorComponent } from './confirmator.component';

describe('ConfirmatorComponent', () => {
  let component: ConfirmatorComponent;
  let fixture: ComponentFixture<ConfirmatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
