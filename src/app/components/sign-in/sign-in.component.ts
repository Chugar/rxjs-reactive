import { AuthService } from './../../services/auth.service';
import { catchError } from 'rxjs/operators';
import { AuthStore } from './../../store/auth.store';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/models/credentials.model';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;
  public passwordHide = true;

  constructor(
    private _fb: FormBuilder,
    private _authStore: AuthStore,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.signInForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  public handleSubmit() {

    const userCredentials = this.signInForm.value as Credentials;

    this._authStore.attemptAuthentication(userCredentials).subscribe(
      (res:HttpResponse<User>) => {
        if (res.status === 200) {
          // TODO: redirect to home + show success popup
        }
      }
    );

  }
}
