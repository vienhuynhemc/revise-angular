import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInModuleComponent } from './component-in-module/component-in-module.component';



@NgModule({
  declarations: [
    ComponentInModuleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GenerateModuleModule { }
