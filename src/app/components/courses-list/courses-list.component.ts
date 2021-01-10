import { Course } from './../../models/course.model';
import { delay } from 'rxjs/operators';
import { LoadingService } from './../../services/loading.service';
import { Observable } from 'rxjs';
import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [LoadingService]
})
export class CoursesListComponent implements OnInit {

  public courses$: Observable<Course>;

  constructor(
    private _courses: CoursesService,
    private _loading: LoadingService
  ) { }

  ngOnInit(): void {
    this.courses$ = this._loading
      .showLoadingUntilComplete(this._courses.getCourses());
  }


  public editCourse(course: Course) {
    console.log(course);
  }


}
