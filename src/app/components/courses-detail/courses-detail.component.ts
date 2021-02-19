import { CourseData } from './../../models/coursedata.model';
import { combineLatest, Observable } from 'rxjs';
import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineAll, map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {

  public courseData$: Observable<CourseData>;


  constructor(
    private _route: ActivatedRoute,
    private _courses: CoursesService
  ) { }

  ngOnInit(): void {
    const courseId = this._route.snapshot.paramMap.get('id');
    const course$ = this._courses.getCourse(courseId).pipe(startWith({}))
    const books$ = this._courses.getCourseBooks(courseId).pipe(startWith([]))

    this.courseData$ = combineLatest([course$, books$]).pipe(
      map( ([course, books]) => {
        return {
          course,
          books
        }
      }),
      tap(console.log)
    );

  }

}
