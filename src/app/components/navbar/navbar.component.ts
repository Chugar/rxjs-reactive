import { AuthService } from './../../services/auth.service';
import { AuthStore } from './../../store/auth.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public _authStore: AuthStore,
    public _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public logout() {
    this._authStore.logout();
  }

}
