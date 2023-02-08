import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { HerosComponent } from './pages/heros/heros.component';
import { DetailComponent } from './pages/detail/detail.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {TourOfHeroesRoutingModule} from "./tour-of-heroes-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        DashboardComponent,
        HomeComponent,
        HerosComponent,
        DetailComponent
    ],
    exports: [
        HomeComponent
    ],
  imports: [
    TourOfHeroesRoutingModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule
  ]
})
export class TourOfHeroesModule { }
