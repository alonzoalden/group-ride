import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadComponent } from '.././lead/lead.component';
import { HomeComponent } from './home.component';
import { RideComponent } from './ride/ride.component';
import { AuthGuard } from '../core';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [ 
            {
                path: '',
                component: RideComponent
            },
            {
                path: 'lead',
                component: LeadComponent,
                canActivate: [AuthGuard],
                data: { animation: 'HomePage' }
            }
        ]
        
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }