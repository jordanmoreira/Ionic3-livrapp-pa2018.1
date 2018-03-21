import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { FirebaseApp } from 'angularfire2';

import { User } from '../../models/user.model';
import { BaseService } from '../base.service';

import * as firebase from 'firebase/app';

@Injectable()
export class UserService extends BaseService {

  users: Observable<User[]>;
  currentUser: AngularFireObject<User>;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: HttpModule
  ) {
    super();
    this.listenAuthState();   
  }

  private setUsers(uidToExclude: string): void {
    this.users = this.mapListKeys<User>(
      this.db.list<User>(`/users`, 
        (ref: firebase.database.Reference) => ref.orderByChild('name')
      )
    )
    .map((users: User[]) => {      
      return users.filter((user: User) => user.$key !== uidToExclude);
    });
  }

  private listenAuthState(): void {
    this.afAuth
      .authState
      .subscribe((authUser: firebase.User) => {
        if (authUser) {
          console.log('Auth state alterado!');          
          this.currentUser = this.db.object(`/users/${authUser.uid}`);
          this.setUsers(authUser.uid);
        }
      });
  }

  create(user: User, uuid: string): Promise<void> {
    return this.db.object(`/users/${uuid}`)
      .set(user).catch(this.handlePromiseError);
  }

  edit(user: {name: string, username: string, photo: string}): Promise<void> {
    return this.currentUser
      .update(user);
      //.catch(this.handlePromiseError);
  }

  userExists(username: string): Observable<boolean> {
    return this.db.list(`/users`,
      (ref: firebase.database.Reference) => ref.orderByChild('name').equalTo(username)
    )
      .valueChanges()
      .map((users: User[]) => {
        return users.length > 0;
      }).catch(this.handleObservableError);
  }

  get(userId: string): AngularFireObject<User> {
    return this.db.object<User>(`/users/${userId}`);
  }

}
