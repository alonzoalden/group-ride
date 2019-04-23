var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, {
                    // preload all modules; optionally we could
                    // implement a custom preloading strategy for just some
                    // of the modules (PRs welcome 😉)
                    preloadingStrategy: PreloadAllModules
                })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map