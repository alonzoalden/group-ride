import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeadComponent } from './lead/lead.component';
import { SettingsComponent } from './settings/settings.component';
import { LeadFormComponent } from './lead/form/form.component';


const routes: Routes = [

    {
        path: '',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: 'lead',
        loadChildren: './lead/lead.module#LeadModule',
    },
    {   
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // preload all modules; optionally we could
        // implement a custom preloading strategy for just some
        // of the modules (PRs welcome 😉)
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
