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
  MatInputModule

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
      MatInputModule
 ],
    exports:[
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      MatMenuModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule
 ]
})

export class MaterialModule{}
