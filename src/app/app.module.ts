import { IjpModule } from './ijp/ijp.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IjpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
