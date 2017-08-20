import { IjpModule } from './ijp/ijp.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IjpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
