import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '../../user-panel.service';

@Component({
  selector: 'app-places-cat-edit',
  templateUrl: './places-cat-edit.component.html',
  styleUrls: ['./places-cat-edit.component.scss']
})
export class PlacesCatEditComponent implements OnInit {

  categories;

  constructor(
    private userPanelService: UserPanelService
  ) { }


  ngOnInit() {
    this.userPanelService.getMyCatPlaces().subscribe((categories) => {
      this.categories = categories;
      console.log(categories);

    })
  }

}
