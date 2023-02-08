import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TourOfHeroesRoutingModule} from "./modules/tour-of-heroes/tour-of-heroes-routing.module";

const routes: Routes = [
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {
    path: 'heroes',
    loadChildren: () => TourOfHeroesRoutingModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
