import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  @Input() places;
  constructor() { }

  ngOnInit() {

  }

}
