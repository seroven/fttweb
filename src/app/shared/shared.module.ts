import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesSharedModule } from './modules/utilities-shared.module';
import { PrimengSharedModule } from './modules/primeng-shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UtilitiesSharedModule,
    PrimengSharedModule
  ],
  exports: [
    UtilitiesSharedModule,
    PrimengSharedModule
  ]
})
export class SharedModule { }
