import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPlacesComponent } from './my-places/my-places.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceSearchComponent } from './place-search/place-search.component';
import { PlacesService } from './places.service';

import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from '../material.module';
import { AddModalComponent } from './add-modal/add-modal.component';
import { ConfirmatorComponent } from '../confirmator/confirmator.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MyPlacesComponent,
    PlaceDetailComponent,
    PlaceListComponent,
    PlaceSearchComponent,
    AddModalComponent,
    ConfirmatorComponent,
    MapComponent
  ],
  providers: [
    PlacesService
  ],
  entryComponents: [
    AddModalComponent,
    ConfirmatorComponent
  ]
})
export class PlacesModule { }
