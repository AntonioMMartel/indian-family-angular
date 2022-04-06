import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndianFatherMehdiComponent } from './indian-father-mehdi/indian-father-mehdi.component';
import { IndianChildAbdamComponent } from './indian-child-abdam/indian-child-abdam.component';
import { IndianFriendBrahmadComponent } from './indian-friend-brahmad/indian-friend-brahmad.component';

@NgModule({
  declarations: [
    AppComponent,
    IndianFatherMehdiComponent,
    IndianChildAbdamComponent,
    IndianFriendBrahmadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
