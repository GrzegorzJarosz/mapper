import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'My mapper';
  lat: number = 50.061753;
  lng: number = 19.937393;

  mainHeight;

  onChoseLocation(e) {
  }

  constructor() { }

  ngOnInit() {
    this.mainHeight = window.innerHeight - 336;
  }

  @HostListener('window:resize', ['$event'])
  onResize(e) {
    this.mainHeight = window.innerHeight - 336;
  }

  StyleHomeMain() {
    return {
      'background-image': 'url(/imgs/bcg-home.jpg)',
      'height': '' + this.mainHeight + 'px'
    }
  }

}