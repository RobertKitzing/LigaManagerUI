import { MatchComponent } from './match/match.component';
import { RoundPipe } from './pipes/round.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { EditMatchDialogComponent } from './editmatch/editmatch.modal';
import { TeamService } from './../service/team.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SeasonService } from '@app/service/season.service';
import { MatNativeDateModule } from '@angular/material';
import { ErrorComponent } from '@app/shared/error/error.component';


@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    AngularFontAwesomeModule,
    TranslateModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EditMatchDialogComponent
  ],
  declarations: [
    LoaderComponent,
    EditMatchDialogComponent,
    RoundPipe,
    MatchComponent,
    ErrorComponent
  ],
  exports: [
    LoaderComponent,
    EditMatchDialogComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoundPipe,
    ErrorComponent,
    MatchComponent,
    TranslateModule
  ],
  providers: [
    SeasonService,
    TeamService,
    MatNativeDateModule
  ]
})
export class SharedModule { }
