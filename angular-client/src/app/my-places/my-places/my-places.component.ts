import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {

  myplaces;

  lat: number = 50.061753;
  lng: number = 19.937393;

  onChoseLocation(e){
    console.log(e);
  }

  constructor(
    private placesService : PlacesService
  ) { }

  ngOnInit() {
    this.placesService.getMyPlaces()
      .subscribe((places) => {this.myplaces = places});
  }

}
