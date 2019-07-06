import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  addModalForm: FormGroup;
  newPlaceDescr: string;
  newPlaceName: string;
  newPlaceCat: string;
  existCatPlaces;


  ngOnInit() {
    this.existCatPlaces = this.data.categories;

    if (this.data.method == 'addNewPlace') {
      this.addModalForm = new FormGroup({
        'newPlaceName': new FormControl(null, [Validators.required]),
        'newPlaceShortDescr': new FormControl(null, [Validators.required]),
        'newPlaceDescr': new FormControl(null, [Validators.required]),
        'newPlaceCat': new FormControl(null, [Validators.required])
      });
    } else if (this.data.method == 'editPlace') {
      this.addModalForm = new FormGroup({
        'newPlaceName': new FormControl(this.data.editedPlace.name, [Validators.required]),
        'newPlaceShortDescr': new FormControl(this.data.editedPlace.shortDescr, [Validators.required]),
        'newPlaceDescr': new FormControl(this.data.editedPlace.description, [Validators.required]),
        'newPlaceCat': new FormControl(this.data.editedPlace.category, [Validators.required])
      });
    }

  }

  public close() {
    this.matDialogRef.close();
    this.placesService.setAddState(false);
  }

  public savePlace() {

    switch (this.data.method) {
      case 'addNewPlace':
        const newPlace = {
          lat: this.data.coords.lat,
          lng: this.data.coords.lng,
          shortDescr: this.addModalForm.value.newPlaceShortDescr,
          description: this.addModalForm.value.newPlaceDescr,
          name: this.addModalForm.value.newPlaceName,
          category: this.addModalForm.value.newPlaceCat,
          user: localStorage.getItem('user')
        }
        this.placesService.addNewPlace(newPlace)
          .subscribe(result => {
            this.close();
          })
        break;

      case 'editPlace':
        const newEditedPlace = {
          _id: this.data.editedPlace._id,
          lat: this.data.editedPlace.lat,
          lng: this.data.editedPlace.lng,
          shortDescr: this.addModalForm.controls.newPlaceShortDescr.value,
          description: this.addModalForm.controls.newPlaceDescr.value,
          name: this.addModalForm.controls.newPlaceName.value,
          category: this.addModalForm.controls.newPlaceCat.value,
          user: localStorage.getItem('user')
        }
        this.placesService.editPlace(newEditedPlace).subscribe(result => {
          this.close();
        })
        break;

      default:
        break;
    }
  }

}