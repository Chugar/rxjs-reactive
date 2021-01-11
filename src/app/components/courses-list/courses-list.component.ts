import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Course } from './../../models/course.model';
import { CoursesService } from './../../services/courses.service';
import { LoadingService } from './../../services/loading.service';
import { CoursesSaveComponent } from './../courses-save/courses-save.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [LoadingService],
})
export class CoursesListComponent implements OnInit {

  public courses$: Observable<Course>;

  constructor(
    private _courses: CoursesService,
    private _loading: LoadingService,
    public _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.courses$ = this._loading
      .showLoadingUntilComplete(this._courses.getCourses());
  }


  public editCourse(course: Course) {
    const dialogRef = this._dialog.open(CoursesSaveComponent, {width: '250px', data: course});

    dialogRef.afterClosed().subscribe(
      res => console.log(res)
    )

  }

}
