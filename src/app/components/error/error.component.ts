import { ErrorService } from './../../services/error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public error$ = this._errorService.error$;

  constructor(
    private _errorService: ErrorService
  ) { }

  ngOnInit(): void {
  }

}
