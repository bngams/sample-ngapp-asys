import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ApiModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ApiModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
