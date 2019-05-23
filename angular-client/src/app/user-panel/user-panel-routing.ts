import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserPanelComponent } from './user-panel.component';
import { PlacesSetComponent } from './set_places/places-set/places-set.component'

import { AuthGuard } from '../guards/auth.guard';
import { UserPanelListComponent } from './user-panel-list/user-panel-list.component';
import { PlacesCatEditComponent } from './set_places/places-cat-edit/places-cat-edit.component';


const appRoutes: Routes = [
    {
        path: 'profile',
        component: UserPanelComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: UserPanelListComponent
            },
            {
                path: 'places',
                component: PlacesSetComponent
            },
            {
                path: 'places/edit',
                component: PlacesCatEditComponent
            }

        ]
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class UserPanelRoutingModule { }







