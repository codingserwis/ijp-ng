import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IjpComponent } from './ijp/ijp.component';
import { Pm25Component } from './pm25/pm25.component';
import { Pm10Component } from './pm10/pm10.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IjpComponent,
    Pm25Component,
    Pm10Component
  ],
  exports: [
    IjpComponent,
    Pm25Component,
    Pm10Component

  ]
})
export class SharedDataModule { }
