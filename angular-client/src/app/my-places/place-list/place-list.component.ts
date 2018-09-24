import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  @Input() places;
  @Output() placeSel = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  onPlaceSelect(place){
    this.placeSel.emit(place);
  }
}
