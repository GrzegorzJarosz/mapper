import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '../../user-panel.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmatorComponent } from '../../../confirmator/confirmator.component';

@Component({
  selector: 'app-places-cat-edit',
  templateUrl: './places-cat-edit.component.html',
  styleUrls: ['./places-cat-edit.component.scss']
})
export class PlacesCatEditComponent implements OnInit {

  categories;

  constructor(
    private userPanelService: UserPanelService,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    this.userPanelService.getMyCatPlaces().subscribe((categories) => {
      this.categories = categories;
      console.log(categories);
    })
  }

  addNewCatPlace() {
    console.log('add new cat');

  }

  // removeCatPlace(_id) {
  //   console.log('item to delete - id:' + _id);

  // }



  removeCatPlace(id, name) {
    let dialog = this.dialog.open(ConfirmatorComponent, {
      data: {
        descr: 'delete',
        id: id,
        name: name
      }
    })
    dialog.afterClosed().subscribe(() => {
      // this.reloadPlaces();
      console.log('succesfully deleted');

    });
  }



}
