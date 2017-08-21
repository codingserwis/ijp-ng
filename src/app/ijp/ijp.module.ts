import { SharedDataModule } from './shared-data/shared-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChabryComponent } from './chabry/chabry.component';
import { PulaskiegoComponent } from './pulaskiego/pulaskiego.component';
import { PileckiegoComponent } from './pileckiego/pileckiego.component';

@NgModule({
  imports: [
    CommonModule,
    SharedDataModule
  ],
  declarations: [
    ChabryComponent,
    PulaskiegoComponent,
    PileckiegoComponent
  ],
  exports: [
    ChabryComponent,
    PulaskiegoComponent,
    PileckiegoComponent
  ]
})
export class IjpModule { }
