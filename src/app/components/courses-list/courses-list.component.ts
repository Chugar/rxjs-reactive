import { ErrorService } from './../../services/error.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { Course } from './../../models/course.model';
import { CoursesService } from './../../services/courses.service';
import { LoadingService } from './../../services/loading.service';
import { CoursesSaveComponent } from './../courses-save/courses-save.component';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [LoadingService, ErrorService],
})
export class CoursesListComponent implements OnInit {

  public courses$: Observable<Course>;
  public imgDefaultSource = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';

  constructor(
    private _courses: CoursesService,
    private _loading: LoadingService,
    private _error: ErrorService,
    public _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  public getAllCourses() {
    this.courses$ = this._loading
      .showLoadingUntilComplete(this._courses.getCourses())
      .pipe(
        catchError(error => {
          this._error.errorOut("Error occured while trying to get courses")
          return throwError(error);
        })
      );
  }


  public editCourse(course: Course) {
    const dialogRef = this._dialog.open(CoursesSaveComponent,
      {width: '450px', data: course, panelClass: 'dialog'}
    );

    dialogRef.afterClosed().subscribe(
      res => {
        if(res)
          this.getAllCourses();
      }
    )

  }

}
