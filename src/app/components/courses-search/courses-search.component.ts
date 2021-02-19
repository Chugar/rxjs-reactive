import { CoursesService } from './../../services/courses.service';
import { Course } from './../../models/course.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent implements OnInit {

  public searchResult$: Observable<Course[]>;
  public activeCourse: Course;


  constructor(
    private _courses: CoursesService
  ) { }

  ngOnInit(): void {
  }

  public onSearch(search: string) {
    this.searchResult$ = this._courses.searchCourse(search);
  }

  public onCourseDetail(course: Course) {
    console.log(course);
    this.activeCourse = course;
  }

  public back() {
    this.activeCourse = null;
  }
}
