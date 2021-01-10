import { CoursesService } from './../../services/courses.service';
import { Course } from './../../models/course.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses-save',
  templateUrl: './courses-save.component.html',
  styleUrls: ['./courses-save.component.scss']
})
export class CoursesSaveComponent implements OnInit {

  public courseForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _courses: CoursesService
  ) { }

  ngOnInit(): void {
    this.courseForm = this._fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required]
    })
  }


  handleSubmit() {
    const saved = this.courseForm.value as Partial<Course>;
    this._courses.saveCourse("1", saved).subscribe(
      (response) => {
        console.log(response);
        TODO:
        // si il y a reponse, il y a update
        // Donc la, il faut appliquer un rechargement,
        // puis une redirection I guess
      }
    )
  }

}
