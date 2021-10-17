import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { BetbotComponent } from './betbot/betbot.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BetbotComponent,
    MainPageComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
