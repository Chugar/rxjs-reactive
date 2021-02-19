import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';
import { CoursesSearchComponent } from './components/courses-search/courses-search.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "courses",
    component: CoursesListComponent,
  },
  {
    path: "courses/:id",
    component: CoursesDetailComponent,
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "search",
    component: CoursesSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
