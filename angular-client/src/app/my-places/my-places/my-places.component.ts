import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UserPanelService } from '../../user-panel/user-panel.service';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {

  public addState: boolean = false;
  public mapFlexOnAdd = 2;

  constructor(
    private placesService: PlacesService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.placesService.getAddState().subscribe((state) => {
      this.addState = state;
      if (this.addState == true) {
        this.mapFlexOnAdd = 0;
      } else {
        this.mapFlexOnAdd = 2;
      }
    })
  }

  setAddState() {
    this.addState = true;
    this.placesService.setAddState(true)
  }

  resetAddState() {
    this.addState = false;
    this.placesService.setAddState(false)
  }
}
