import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlacesService } from '../my-places/places.service';
import { MatSnackBar } from '@angular/material';
import { UserPanelService } from '../user-panel/user-panel.service';

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
    private userPanelService: UserPanelService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public close() {
    this.matDialogRef.close()
  }

  public accept() {
    switch (this.data.method) {
      case 'removePlace':
        this.placesService.removePlace(this.data.place._id)
          .subscribe(result => {
            this.snackBar.open(`place ${this.data.place.name} succesfully deleted`, 'ok', { duration: 2000 });
            this.close();
          })
        break;

      case 'deleteCatPlace':
        this.userPanelService.removeCatPlace(this.data.cat._id)
          .subscribe(result => {
            this.snackBar.open(`place ${this.data.cat.name} succesfully deleted`, 'ok', { duration: 2000 });
            this.close();
          })
        break;

      default:
        break;
    }
  }


}
