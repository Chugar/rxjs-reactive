import { Observable } from 'rxjs';
import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public isLoading$: Observable<boolean>;

  constructor(
    private _loading: LoadingService
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._loading.isLoading$;
  }

}
