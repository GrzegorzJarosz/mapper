import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyPlacesComponent } from './my-places/my-places/my-places.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './guards/auth.guard';
import { UserPanelRoutingModule } from './user-panel/user-panel-routing';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myplaces', component: MyPlacesComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
