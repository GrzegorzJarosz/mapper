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

  ngOnInit() {
  }

  public close() {
    this.matDialogRef.close()
  }

  public addPlace() {
    this.data.descr = this.newPlaceDescr;
    this.data.name = this.newPlaceName;
    this.data.category = this.newPlaceCat;

    this.placesService.addNewPlace(this.data)
      .subscribe(result => {
        // console.log(result)
        this.close();
      })

  }
}
