import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './user-panel.component';
import { PlacesSetComponent } from './places-set/places-set.component';
import { MaterialModule } from '../material.module';
import { UserPanelRoutingModule } from './user-panel-routing';
import { UserPanelListComponent } from './user-panel-list/user-panel-list.component';

@NgModule({
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    MaterialModule
  ],
  declarations: [
    UserPanelComponent,
    PlacesSetComponent,
    UserPanelListComponent
  ]
})
export class UserPanelModule { }
