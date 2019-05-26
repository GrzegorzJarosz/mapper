import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './user-panel.component';
import { PlacesSetComponent } from './set_places/places-set/places-set.component';
import { MaterialModule } from '../material.module';
import { UserPanelRoutingModule } from './user-panel-routing';
import { UserPanelListComponent } from './user-panel-list/user-panel-list.component';
import { PlacesCatEditComponent } from './set_places/places-cat-edit/places-cat-edit.component';
import { UserPanelService } from './user-panel.service';


@NgModule({
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    MaterialModule
  ],
  declarations: [
    UserPanelComponent,
    PlacesSetComponent,
    UserPanelListComponent,
    PlacesCatEditComponent
  ],
  providers: [
    UserPanelService
  ]
})
export class UserPanelModule { }
