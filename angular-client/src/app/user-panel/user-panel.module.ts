import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './user-panel.component';
import { PlacesSetComponent } from './set_places/places-set/places-set.component';
import { MaterialModule } from '../material.module';
import { UserPanelRoutingModule } from './user-panel-routing';
import { UserPanelListComponent } from './user-panel-list/user-panel-list.component';
import { PlacesCatEditComponent } from './set_places/places-cat-edit/places-cat-edit.component';
import { UserPanelService } from './user-panel.service';
import { AddCatModalComponent } from './set_places/add-cat-modal/add-cat-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserPanelComponent,
    PlacesSetComponent,
    UserPanelListComponent,
    PlacesCatEditComponent,
    AddCatModalComponent
  ],
  providers: [
    UserPanelService
  ],
  entryComponents: [
    AddCatModalComponent
  ]
})
export class UserPanelModule { }
