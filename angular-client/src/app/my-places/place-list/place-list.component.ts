import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmatorComponent } from '../../confirmator/confirmator.component';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  @Input() shouldOpen;

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

  classesForList() {
    return {
      'list-show': this.shouldOpen
    }
  }

  openEditModal(editedPlace) {

    //if load catplaces success:
    let dialog = this.dialog.open(AddModalComponent, {
      data: {
        editedPlace: editedPlace,
        method: 'editPlace',
        descr: 'edit place'
      }
    })
    dialog.afterClosed().subscribe(() => {

    }),
      //
      //if error
      (err) => { console.log(err) }

  }

}
