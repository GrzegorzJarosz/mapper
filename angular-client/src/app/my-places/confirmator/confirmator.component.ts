import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlacesService } from '../places.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-confirmator',
  templateUrl: './confirmator.component.html',
  styleUrls: ['./confirmator.component.scss']
})
export class ConfirmatorComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ConfirmatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private placesService: PlacesService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public close(){
    this.matDialogRef.close()
  }

  public removePlace(){
    this.placesService.removePlace(this.data.place._id)
    .subscribe(result => {
      this.snackBar.open(`place ${this.data.place.name} succesfully deleted`, 'ok', { duration: 2000 });
      console.log(result)
      this.close();
    })

  }

}
