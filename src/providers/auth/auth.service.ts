import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuth } from 'angularfire2/auth';
import { BaseService } from '../base.service';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService extends BaseService {

  constructor(
    public http: HttpModule,
    public httpClientModule: HttpClientModule,
    public afAuth: AngularFireAuth
  ) {
    super();
    console.log('Hello AuthProvider Provider');
  }

  createAuthUser(user: { email: string, password: string }): Promise<firebase.User> {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .catch(this.handlePromiseError);
  }

  signinWithEmail(user: { email: string, password: string }): Promise<boolean> {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((authUser: firebase.User) => {
        return authUser != null;
      }).catch(this.handlePromiseError);
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth
        .authState
        .first()
        .subscribe((authUser: firebase.User) => {
          (authUser) ? resolve(true) : reject(false);
        });
    });
  }

}
