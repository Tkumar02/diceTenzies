import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DieComponent } from './die/die.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DiceComponent } from './dice/dice.component';
import { StatsComponent } from './stats/stats.component';
import { environment } from 'src/environments/environment.prod';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp } from 'firebase/app';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NameComponent } from './name/name.component'

@NgModule({
  declarations: [
    AppComponent,
    DieComponent,
    HomeComponent,
    NavComponent,
    DiceComponent,
    StatsComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
