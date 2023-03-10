import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MyStoreModule} from "./modules/my-store/my-store.module";
import {TourOfHeroesModule} from "./modules/tour-of-heroes/tour-of-heroes.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyStoreModule,
    TourOfHeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
