import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesCatEditComponent } from './places-cat-edit.component';

describe('PlacesCatEditComponent', () => {
  let component: PlacesCatEditComponent;
  let fixture: ComponentFixture<PlacesCatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesCatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesCatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
