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
    this.loadCats()
  }


  loadCats() {
    this.userPanelService.getMyCatPlaces().subscribe((categories) => {
      this.categories = categories;
    });
  }

  addNewCatPlace() {
    console.log('add new cat');
  }


  openConfirmator(cat) {
    let dialog = this.dialog.open(ConfirmatorComponent, {
      data: {
        method: 'deleteCatPlace',
        descr: 'delete',
        cat: cat
      }
    })
    dialog.afterClosed().subscribe(() => {
      this.loadCats()
    });
  }

}
