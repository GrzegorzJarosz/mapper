import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'My mapper';
  lat: number = 50.061753;
  lng: number = 19.937393;

  onChoseLocation(e){
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
