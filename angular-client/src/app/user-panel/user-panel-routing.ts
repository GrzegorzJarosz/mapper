import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserPanelComponent } from './user-panel.component';
import { PlacesSetComponent } from './places-set/places-set.component'

import { AuthGuard } from '../guards/auth.guard';
import { UserPanelListComponent } from './user-panel-list/user-panel-list.component';

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







