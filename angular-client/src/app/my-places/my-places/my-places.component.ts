import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { UserPanelService } from '../../user-panel/user-panel.service';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {

  myplaces;
  addState: boolean = false;
  selectedPlace;
  catPlaces;

  currentZoom = {
    lat: 50.061753,
    lng: 19.937393,
    zoom: 10
  }

  constructor(
    private placesService: PlacesService,
    public dialog: MatDialog,
    private userPanelService: UserPanelService
  ) { }

  ngOnInit() {
    this.loadMyPlaces();
  }

  // LatLngBounds

  loadMyPlaces() {
    this.placesService.getMyPlaces()
      .subscribe((places) => { this.myplaces = places });
  }

  loadCategoryPlaces() {
    return this.userPanelService.getMyCatPlaces()
  }

  onChoseLocation(e) {
    this.openDialog(e);
    this.addState = false;
  }

  setAddState() {
    this.addState = true;
  }
  resetAddState() {
    this.addState = false;
  }

  openDialog(coords) {
    if (this.addState === true) {

      this.loadCategoryPlaces().subscribe((catPlaces) => { //load catplaces
        this.catPlaces = catPlaces;

        //if load catplaces success:
        let dialog = this.dialog.open(AddModalComponent, {
          data: {
            descr: 'new place',
            coords: coords,
            categories: this.catPlaces
          }
        })
        dialog.afterClosed().subscribe(() => {
          this.loadMyPlaces();
        }),
          //
          //if error
          (err) => { console.log(err) }


      })



    }
  }

  onPlaceSelected($event) {
    this.currentZoom.lat = $event.lat;
    this.currentZoom.lng = $event.lng;
    this.currentZoom.zoom = 12;
  }

}
