import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecoverComponent } from './recover/recover.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { FavourComponent } from './favour/favour.component';
import { AskComponent } from './ask/ask.component';
import { AnswerComponent } from './answer/answer.component';
import { HowComponent } from './how/how.component';

import { ApiService } from './api.service';
import { Ask2Component } from './ask2/ask2.component';
import { Ask3Component } from './ask3/ask3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RecoverComponent,
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    FavourComponent,
    AskComponent,
    AnswerComponent,
    HowComponent,
    Ask2Component,
    Ask3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
