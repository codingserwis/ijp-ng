import { SharedDataModule } from './shared-data/shared-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChabryComponent } from './chabry/chabry.component';
import { PulaskiegoComponent } from './pulaskiego/pulaskiego.component';
import { PileckiegoComponent } from './pileckiego/pileckiego.component';
import { SolidarnosciComponent } from './solidarnosci/solidarnosci.component';
import { PasiekaComponent } from './pasieka/pasieka.component';
import { NwkComponent } from './nwk/nwk.component';

@NgModule({
  imports: [
    CommonModule,
    SharedDataModule
  ],
  declarations: [
    ChabryComponent,
    PulaskiegoComponent,
    PileckiegoComponent,
    SolidarnosciComponent,
    PasiekaComponent,
    NwkComponent
  ],
  exports: [
    ChabryComponent,
    PulaskiegoComponent,
    PileckiegoComponent,
    SolidarnosciComponent,
    PasiekaComponent,
    NwkComponent
  ]
})
export class IjpModule { }
