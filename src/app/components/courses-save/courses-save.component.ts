import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingService } from '../../feedback/loading/loading.service';
import { Course } from './../../models/course.model';
import { CoursesService } from './../../services/courses.service';
import { CoursesStore } from './../../store/courses.store';


@Component({
  selector: 'app-courses-save',
  templateUrl: './courses-save.component.html',
  styleUrls: ['./courses-save.component.scss'],
  providers: [LoadingService]
})
export class CoursesSaveComponent implements OnInit {

  public courseForm: FormGroup;


  constructor(
    private _loading: LoadingService,
    private _fb: FormBuilder,
    private _courses: CoursesService,
    private _store: CoursesStore,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    public dialogRef: MatDialogRef<CoursesSaveComponent, any>
  ) { }


  ngOnInit(): void {
    this.courseForm = this._fb.group({
      title: [this.data.title, Validators.required],
      author: [this.data.author, Validators.required],
      content: [this.data.content, Validators.required]
    })
  }


  handleSubmit() {
    const saved = this.courseForm.value as Partial<Course>;

    this._store.saveCourse(this.data.id, saved).subscribe(
      (res) => {
       this.dialogRef.close(res);
      }
    );
  }

}
