import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class LoadingService {

  private loaderSubject = new BehaviorSubject(false);
  public isLoading$ = this.loaderSubject.asObservable();

  constructor() { }

  private startLoading() {
    this.loaderSubject.next(true);
  }

  private stopLoading() {
    this.loaderSubject.next(false);
  }

  public loadUntilComplete(input: Observable<any>) {
    return of(null).pipe(
      tap(() => this.startLoading()),
      switchMap(() => input),
      finalize(() => this.stopLoading())
    )
  }
}
