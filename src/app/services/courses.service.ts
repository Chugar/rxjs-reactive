import { COURSES_URL, BOOKS_URL } from './../properties';
import { ErrorService } from '../feedback/error/error.service';
import { LoadingService } from '../feedback/loading/loading.service';
import { delay, filter, map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { Book } from '../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(
    private _http: HttpClient,
  ) { }


  public getCourses(): Observable<any> {

    return this._http.get(COURSES_URL).pipe(
      delay(2500),
      shareReplay()
    );
  }


  public getCourse(id: string): Observable<Course> {
    return this._http.get<Course>(`${COURSES_URL}/${id}`).pipe(
      shareReplay()
    );
  }


  public getCourseBooks(courseId: string): Observable<Book[]> {
    return this._http.get<Book[]>(BOOKS_URL).pipe(
      map(res => res.filter(el => el.courseId.toString() === courseId)),
      shareReplay()
    )
  }

  public saveCourse(courseId: string, course: Partial<Course>) {
    const $savedCourses = this._http.put(`${COURSES_URL}/${courseId}`, course).pipe(
      delay(1000)
    );

    return $savedCourses;
  }

  public searchCourse(search: string) {
    return this._http.get<Course[]>(COURSES_URL).pipe(
      map( (courses) =>
        courses.filter( (c: Course) => c.title.includes(search) || c.author.includes(search) )
      ),
      shareReplay(),
    );
  }
}
