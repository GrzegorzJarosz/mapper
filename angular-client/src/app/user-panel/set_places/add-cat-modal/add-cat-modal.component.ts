import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserPanelService } from '../../user-panel.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-add-cat-modal',
  templateUrl: './add-cat-modal.component.html',
  styleUrls: ['./add-cat-modal.component.scss']
})
export class AddCatModalComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<AddCatModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userPanelService: UserPanelService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  newCatName: string;

  catName = new FormControl('', [Validators.required])

  public close() {
    this.matDialogRef.close()
  }

  public addCat() {
    this.data.descr = this.newCatName;

    this.userPanelService.addCatPlace(this.newCatName)
      .subscribe((result) => {
        this.snackBar.open('new category succesfully added', 'ok', { duration: 2000 });
        this.close();
      },
        (err) => {
          console.log(err);
          this.snackBar.open('error with category saving', 'ok', { duration: 2000 });
        }
      )
  }
}
