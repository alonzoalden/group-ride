import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeadComponent } from './lead/lead.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'lead',
        loadChildren: () => import('./lead/lead.module').then(m => m.LeadModule),
    },
    {   
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
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
