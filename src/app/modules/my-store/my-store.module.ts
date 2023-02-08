import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentComponent } from './components/content/content.component';
import { ElertComponent } from './components/elert/elert.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    ContentComponent,
    ElertComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyStoreModule { }
