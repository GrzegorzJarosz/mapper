import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {

  myplaces;
  addState:boolean = false;
  selectedNewPlace;

  lat: number = 50.061753;
  lng: number = 19.937393;

  constructor(
    private placesService : PlacesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadMyPlaces();
  }
LatLngBounds
  loadMyPlaces(){
    this.placesService.getMyPlaces()
      .subscribe((places) => {this.myplaces = places});
  }

  onChoseLocation(e){
    this.openDialog(e);
    this.addState = false;
  }

  setAddState(){
    this.addState = true;
  }

  openDialog(coords){
    if(this.addState === true){
      let dialog = this.dialog.open(AddModalComponent, {data:{
        descr:'new place',
        coords:coords
    }})
      dialog.afterClosed().subscribe(()=>{
        this.loadMyPlaces();
      })
    }

  }

}
