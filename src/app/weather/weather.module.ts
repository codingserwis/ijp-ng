import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather-component/weather.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ WeatherComponent ],
  exports: [ WeatherComponent ]
})
export class WeatherModule { }
