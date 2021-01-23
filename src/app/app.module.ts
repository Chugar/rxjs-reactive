import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesSaveComponent } from './components/courses-save/courses-save.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    LoadingComponent,
    CoursesSaveComponent,
    ErrorComponent,
    NavbarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
