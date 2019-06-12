import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { UserPanelService } from '../../user-panel/user-panel.service';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {

  public addState: boolean = false;

  constructor(
    private placesService: PlacesService,
    private userPanelService: UserPanelService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.placesService.getAddState().subscribe((state) => this.addState = state)
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
