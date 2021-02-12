import { TokenInterceptService } from './services/token-intercept.service';
import { ErrorService } from './feedback/error/error.service';
import { LoadingService } from './feedback/loading/loading.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesSaveComponent } from './components/courses-save/courses-save.component';
import { ErrorComponent } from './feedback/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { FeedbackModule } from './feedback/feedback.module';
import { SignInComponent } from './components/sign-in/sign-in.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CoursesSaveComponent,
    NavbarComponent,
    SignInComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FeedbackModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    LoadingService,
    ErrorService,
    // {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptService, multi: true }
  ],
})
export class AppModule { }
