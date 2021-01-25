import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  private subject = new BehaviorSubject("");
  public error$ = this.subject.asObservable();

  constructor() { }

  public errorOut(errorMessage: string) {
    this.subject.next(errorMessage);
  }
}
