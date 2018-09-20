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
  MatDialogModule,
  MatCardModule
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
      MatDialogModule,
      MatCardModule
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
      MatDialogModule,
      MatCardModule
 ]
})

export class MaterialModule{}
