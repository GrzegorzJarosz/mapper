import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {

  public addState: boolean = false;
  public listShouldOpen: boolean = false;

  constructor(
    private placesService: PlacesService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.placesService.getAddState().subscribe((state) => {
      this.addState = state;
    });
  }

  setAddState() {
    this.addState = true;
    this.placesService.setAddState(true)
  }

  resetAddState() {
    this.addState = false;
    this.placesService.setAddState(false)
  }

  listOpener() {
    if (this.addState == true) {
      this.listShouldOpen = false;
    } else {
      this.listShouldOpen = !this.listShouldOpen;
    }
  }

}
