import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


const materialElements = [
  MatProgressSpinnerModule,
  MatInputModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
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
