import { LoadingService } from 'src/app/feedback/loading/loading.service';
import { ErrorService } from './error/error.service';
import { MaterialModule } from './../material.module';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoadingComponent,
    ErrorComponent
  ],
  providers: [LoadingService, ErrorService]
})
export class FeedbackModule { }
