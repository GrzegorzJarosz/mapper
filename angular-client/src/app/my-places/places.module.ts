import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPlacesComponent } from './my-places/my-places.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceSearchComponent } from './place-search/place-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyPlacesComponent, PlaceDetailComponent, PlaceListComponent, PlaceSearchComponent]
})
export class PlacesModule { }
