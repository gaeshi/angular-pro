import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private af: AngularFireAuth) {
  }

  createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.af.signInWithEmailAndPassword(email, password);
  }
}
