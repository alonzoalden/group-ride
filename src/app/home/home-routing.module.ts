import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadComponent } from '.././lead/lead.component';
import { HomeComponent } from './home.component';
import { DiscoverComponent } from './discover/discover.component';

const routes: Routes = [
    {
        path: '',
        component: DiscoverComponent,
        
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }