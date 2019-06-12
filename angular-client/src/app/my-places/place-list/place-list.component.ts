import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmatorComponent } from '../../confirmator/confirmator.component';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  public myPlaces;
  private selectedPlace;

  constructor(
    private placesService: PlacesService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.placesLoader();
    this.placesService.reloader.subscribe(() => {
      this.placesLoader();
    })
  }

  placesLoader() {
    this.placesService.getMyPlaces().subscribe((places) => {
      this.myPlaces = places
    },
      (err) => {
        if (err) {
          console.log(err);
          this.snackBar.open('something went wrong please try later', 'ok', { duration: 2000 });
        }
      });
  }

  hasList() {
    return this.myPlaces == undefined || this.myPlaces.length == 0;
  }

  onPlaceSelect(place) {
    this.selectedPlace = place;
    this.placesService.setSelectedPlace(place);
  }

  //removeplace -> confirmator
  openConfirmator(place) {
    let dialog = this.dialog.open(ConfirmatorComponent, {
      data: {
        method: 'removePlace',
        descr: 'delete',
        place: place
      }
    })
    dialog.afterClosed().subscribe(() => {
      this.placesLoader();
    });
  }

}
