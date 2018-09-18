import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
    imports:[
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      MatMenuModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSnackBarModule,
      MatDialogModule
 ],
    exports:[
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      MatMenuModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSnackBarModule,
      MatDialogModule
 ]
})

export class MaterialModule{}
