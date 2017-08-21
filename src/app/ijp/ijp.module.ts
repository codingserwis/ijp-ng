import { SharedDataModule } from './shared-data/shared-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChabryComponent } from './chabry/chabry.component';
import { PulaskiegoComponent } from './pulaskiego/pulaskiego.component';

@NgModule({
  imports: [
    CommonModule,
    SharedDataModule
  ],
  declarations: [
    ChabryComponent,
    PulaskiegoComponent
  ],
  exports: [
    ChabryComponent,
    PulaskiegoComponent
  ]
})
export class IjpModule { }
