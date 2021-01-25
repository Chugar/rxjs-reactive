import { ErrorService } from '../feedback/error/error.service';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from '../feedback/loading/loading.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { Injectable } from "@angular/core";
import { Course } from '../models/course.model';


/**
 * @class CoursesStore
 * Mimicks a state management service for 'course' api data
 */
@Injectable({
  providedIn: "root"
})
export class CoursesStore {

  private coursesUrl = "http://localhost:3000/courses";
  private subejct = new BehaviorSubject<Course[]>([])
  public course$ = this.subejct.asObservable();


  constructor(
    private _http: HttpClient,
    private _error: ErrorService,
    private _loading: LoadingService,
  ) {
    this.loadAllCourses();
  }

  private loadAllCourses() {

    const courses$ = this._http.get<Course[]>(this.coursesUrl)
    .pipe(
      catchError( err => {
        this._error.errorOut("could not load all courses");
        return throwError(err)
      }),
      tap(courses => this.subejct.next(courses))
    );

    this._loading.loadUntilComplete(courses$)
      .subscribe();
  }


  public saveCourse(courseId: string, courseChanges: Partial<Course>) {
    const courses = this.subejct.getValue();
    const newCourses = courses.slice(0);
    const i = courses.findIndex(course => course.id == courseId);

    const newCourse = {
      ...courses[i],
      ...courseChanges
    }
    newCourses[i] = newCourse;

    this.subejct.next(newCourses);

    return this._http.put(`${this.coursesUrl}/${courseId}`, courseChanges);
  }

}
