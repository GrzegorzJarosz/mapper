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
  MatSnackBarModule

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
      MatSnackBarModule
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
      MatSnackBarModule
 ]
})

export class MaterialModule{}
