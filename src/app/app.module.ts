import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreditsComponent } from './credits/credits.component';
import { HelpComponent } from './help/help.component';

import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    ReviewsComponent,
    CreditsComponent,
    HelpComponent,
    ActivityComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'requests', pathMatch: 'full' },
      {
        path: 'requests', component: RequestsComponent, children:
          [{ path: '', component: ActivityComponent },
          { path: 'activity', component: ActivityComponent },
          { path: 'notes', component: NotesComponent }]
      },
      { path: 'credits', component: CreditsComponent },
      { path: 'help', component: HelpComponent },
      { path: 'reviews', component: ReviewsComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
