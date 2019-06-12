import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<AddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private placesService: PlacesService
  ) { }

  newPlaceDescr: string;
  newPlaceName: string;
  newPlaceCat: string;
  existCatPlaces;


  ngOnInit() {
    this.existCatPlaces = this.data.categories;
  }

  public close() {
    this.matDialogRef.close();
    this.placesService.setAddState(false);
  }

  public addPlace() {
    const newPlace = {
      lat: this.data.coords.lat,
      lng: this.data.coords.lng,
      description: this.newPlaceDescr,
      name: this.newPlaceName,
      category: this.newPlaceCat,
      user: localStorage.getItem('user')
    }

    this.placesService.addNewPlace(newPlace)
      .subscribe(result => {
        this.close();
      })

  }
}
