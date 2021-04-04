import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

/*
  var firebaseConfig = {
    apiKey: "AIzaSyDOioJeydPRJr6eY6Y1EUJAb2XltmuUSyo",
    authDomain: "fitness-app-e8205.firebaseapp.com",
    databaseURL: "https://fitness-app-e8205-default-rtdb.firebaseio.com",
    projectId: "fitness-app-e8205",
    storageBucket: "fitness-app-e8205.appspot.com",
    messagingSenderId: "788618193920",
    appId: "1:788618193920:web:99d1b397ce8605d3237ce5"
  };
 */
