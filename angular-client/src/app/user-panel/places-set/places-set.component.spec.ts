import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesSetComponent } from './places-set.component';

describe('PlacesSetComponent', () => {
  let component: PlacesSetComponent;
  let fixture: ComponentFixture<PlacesSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
