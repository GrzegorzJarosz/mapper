import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelListComponent } from './user-panel-list.component';

describe('UserPanelListComponent', () => {
  let component: UserPanelListComponent;
  let fixture: ComponentFixture<UserPanelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
