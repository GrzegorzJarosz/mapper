import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmatorComponent } from '../../confirmator/confirmator.component';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { UserPanelService } from '../../user-panel/user-panel.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  @Input() shouldOpen;

  public myPlaces;
  private selectedPlace;
  public catPlaces;


  constructor(
    private placesService: PlacesService,
    private userPanelService: UserPanelService,
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

  loadCategoryPlaces() {
    return this.userPanelService.getMyCatPlaces()
  }

  openEditModal(editedPlace) {

    this.loadCategoryPlaces().subscribe((catPlaces) => { //load catplaces
      this.catPlaces = catPlaces;

      //if load catplaces success:
      let dialog = this.dialog.open(AddModalComponent, {
        data: {
          editedPlace: editedPlace,
          method: 'editPlace',
          descr: 'edit place',
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
