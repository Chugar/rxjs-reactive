import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private coursesUrl = "http://localhost:3000/courses";

  constructor(
    private _http: HttpClient,
  ) { }


  public getCourses(): Observable<any> {
    return this._http.get(this.coursesUrl)
    .pipe(
      delay(2500)
    );
  }

  public saveCourse(courseId: string, course: Partial<Course>) {
    return this._http.put(`${this.coursesUrl}/${courseId}`, course);
  }





}
