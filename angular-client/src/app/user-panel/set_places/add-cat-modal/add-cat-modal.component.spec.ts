import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatModalComponent } from './add-cat-modal.component';

describe('AddCatModalComponent', () => {
  let component: AddCatModalComponent;
  let fixture: ComponentFixture<AddCatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
