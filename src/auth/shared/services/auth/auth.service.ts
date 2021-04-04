import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { tap } from 'rxjs/operators';
import { Store } from '../../../../store';

export interface User {
  email: string | null;
  uid: string;
  authenticated: boolean;
}

@Injectable()
export class AuthService {

  auth$ = this.af.authState.pipe(tap(next => {
    if (!next) {
      this.store.set('user', undefined);
    } else {
      const user: User = {
        email: next.email,
        uid: next.uid,
        authenticated: true
      };
      this.store.set('user', user);
    }
  }));

  constructor(
    private af: AngularFireAuth,
    private store: Store) {
  }

  createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logoutUser(): Promise<void> {
    return this.af.signOut();
  }
}
