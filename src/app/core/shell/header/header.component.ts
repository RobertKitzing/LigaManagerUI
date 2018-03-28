import { LoginComponent } from './../../../login/login.component';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav, MatDialog } from '@angular/material';

import { AuthenticationService } from '../../authentication/authentication.service';
import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  constructor(private router: Router,
              private titleService: Title,
              public authenticationService: AuthenticationService,
              private i18nService: I18nService,
              public dialog: MatDialog) { }

  ngOnInit() { }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout();
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent);
  }
}
