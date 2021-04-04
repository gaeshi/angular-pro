import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
      {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyDOioJeydPRJr6eY6Y1EUJAb2XltmuUSyo',
  authDomain: 'fitness-app-e8205.firebaseapp.com',
  databaseURL: 'https://fitness-app-e8205-default-rtdb.firebaseio.com',
  projectId: 'fitness-app-e8205',
  storageBucket: 'fitness-app-e8205.appspot.com',
  messagingSenderId: '788618193920',
  appId: '1:788618193920:web:99d1b397ce8605d3237ce5'
};

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ],
})
export class AuthModule {
}
