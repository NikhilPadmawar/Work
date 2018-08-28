import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreditsComponent } from './credits/credits.component';
import { HelpComponent } from './help/help.component';

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    ReviewsComponent,
    CreditsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'requests',component:RequestsComponent},
      {path:'credits',component:CreditsComponent},
      {path:'help',component:HelpComponent},
      {path:'reviews',component:ReviewsComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
