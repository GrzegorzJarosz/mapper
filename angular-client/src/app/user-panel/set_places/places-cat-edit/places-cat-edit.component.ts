import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '../../user-panel.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmatorComponent } from '../../../confirmator/confirmator.component';
import { AddCatModalComponent } from '../add-cat-modal/add-cat-modal.component';

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

  hasCatPlaces() {
    return this.categories.length == 0;
  }

  loadCats() {
    this.userPanelService.getMyCatPlaces().subscribe((categories) => {
      this.categories = categories;
    });
  }

  addNewCatPlace() {
    this.openAddCatDialog();
  }

  openAddCatDialog() {
    let dialog = this.dialog.open(AddCatModalComponent, {
      data: {
        descr: 'new cat'
      }
    })
    dialog.afterClosed().subscribe(() => {
      this.loadCats()
    })
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
