import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from '../places.service';
import { UserPanelService } from '../../user-panel/user-panel.service';
import { MatDialog } from '@angular/material';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private myPlaces;
  public openedWindow;
  private selectedPlace;
  private addState: boolean = false;
  public catPlaces;

  currentZoom = {
    lat: 50.061753,
    lng: 19.937393,
    zoom: 10
  }

  constructor(
    private placesService: PlacesService,
    private userPanelService: UserPanelService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.placesLoader();
    this.onSelectPlace();
    this.onAddState();
    this.placesService.reloader.subscribe(() => {
      this.placesLoader();
    })
  }

  placesLoader() {
    this.placesService.getMyPlaces().subscribe((places) => {
      this.myPlaces = places
    },
      () => { }
    );
  }

  onSelectPlace() {
    this.placesService.getSelectedPlace().subscribe((place) => {
      this.selectedPlace = place;
      this.currentZoom = {
        lat: place.lat,
        lng: place.lng,
        zoom: 14
      }
      this.clickedMarker(place._id)
    });
  }


  loadCategoryPlaces() {
    return this.userPanelService.getMyCatPlaces()
  }

  onChooseLocation(e) {
    if (this.addState == true) {
      this.loadCategoryPlaces().subscribe((catPlaces) => { //load catplaces
        this.catPlaces = catPlaces;

        //if load catplaces success:
        let dialog = this.dialog.open(AddModalComponent, {
          data: {
            descr: 'new place',
            coords: e.coords,
            categories: this.catPlaces
          }
        })
        dialog.afterClosed().subscribe(() => {

        }),
          //
          //if error
          (err) => { console.log(err) }
      })

    }
  }

  onAddState() {
    this.placesService.getAddState().subscribe((state) => {
      this.addState = state;
    })
  }


  ///infoWindow

  clickedMarker(placeId) {
    this.openedWindow = placeId;
  }

  isInfoWindowOpen(placeId) {
    return this.openedWindow === placeId;
  }


}
