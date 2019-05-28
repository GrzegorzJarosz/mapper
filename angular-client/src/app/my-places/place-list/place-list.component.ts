import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmatorComponent } from '../../confirmator/confirmator.component';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  @Input() places;
  @Output() placeSel = new EventEmitter<any>();
  @Output() refreshMap = new EventEmitter<boolean>();

  constructor(
    private placesService: PlacesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() { }

  onPlaceSelect(place) {
    this.placeSel.emit(place);
  }
  reloadPlaces() {
    this.refreshMap.emit(true);
  }

  openConfirmator(place) {
    let dialog = this.dialog.open(ConfirmatorComponent, {
      data: {
        method: 'removePlace',
        descr: 'delete',
        place: place
      }
    })
    dialog.afterClosed().subscribe(() => {
      this.reloadPlaces();
    });
  }

}
