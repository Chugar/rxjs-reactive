import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class LoadingService {

  private loaderSubject = new BehaviorSubject(false);
  public isLoading$ = this.loaderSubject.asObservable();

  constructor() { }

  private startLoading() {
    console.log("start loading");
    this.loaderSubject.next(true);
  }

  private stopLoading() {
    console.log("stopped loading");
    this.loaderSubject.next(false);
  }

  public showLoadingUntilComplete(input: Observable<any>) {
    return of(null).pipe(
      tap(() => this.startLoading()),
      switchMap(() => input),
      finalize(() => this.stopLoading())
    )
  }
}
