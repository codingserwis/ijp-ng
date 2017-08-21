import { SharedDataModule } from './shared-data/shared-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChabryComponent } from './chabry/chabry.component';
import { PulaskiegoComponent } from './pulaskiego/pulaskiego.component';
import { PileckiegoComponent } from './pileckiego/pileckiego.component';
import { SolidarnosciComponent } from './solidarnosci/solidarnosci.component';

@NgModule({
  imports: [
    CommonModule,
    SharedDataModule
  ],
  declarations: [
    ChabryComponent,
    PulaskiegoComponent,
    PileckiegoComponent,
    SolidarnosciComponent
  ],
  exports: [
    ChabryComponent,
    PulaskiegoComponent,
    PileckiegoComponent,
    SolidarnosciComponent
  ]
})
export class IjpModule { }
