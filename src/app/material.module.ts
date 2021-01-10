import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';



const materialElements = [
  MatProgressSpinnerModule,
  MatInputModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialElements
  ],
  exports: [
    materialElements
  ]
})
export class MaterialModule { }
