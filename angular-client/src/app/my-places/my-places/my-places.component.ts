import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {

  myplaces;

  constructor(
    private placesService : PlacesService
  ) { }

  ngOnInit() {

    this.placesService.getMyPlaces().subscribe(
      places => {console.log(places)}
    )

  }

}
