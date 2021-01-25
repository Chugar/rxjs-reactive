import { catchError } from 'rxjs/operators';
import { ErrorService } from './../../feedback/error/error.service';
import { LoadingService } from 'src/app/feedback/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { Course } from './../../models/course.model';
import { CoursesService } from './../../services/courses.service';
import { CoursesStore } from './../../services/courses.store';
import { CoursesSaveComponent } from './../courses-save/courses-save.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [LoadingService, ErrorService]
})
export class CoursesListComponent implements OnInit {

  public courses$: Observable<Course[]>;
  public imgDefaultSource = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';

  constructor(
    private _courseStore: CoursesStore,
    private _courses: CoursesService,
    private _loader: LoadingService,
    private _error: ErrorService,
    public _dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }


  public getAllCourses() {
    // Stateful approach
    this.courses$ = this._courseStore.course$;
  }


  public editCourse(course: Course) {
    const dialogRef = this._dialog.open(CoursesSaveComponent,
      {width: '450px', data: course, panelClass: 'dialog'}
    );

    dialogRef.afterClosed().subscribe(
      res => {
        if(res)
          this.getAllCourses();
    });
  }

}
