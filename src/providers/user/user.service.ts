import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import { User } from '../../models/user.model';
import { BaseService } from '../base.service';

import * as firebase from 'firebase/app';

@Injectable()
export class UserService extends BaseService {

  users: Observable<User[]>;

  constructor(
    public db: AngularFireDatabase,
    public http: HttpModule
  ) {
    super();
    this.users = this.db.list<User>('/users').valueChanges();
  }

  create(user: User, uuid: string): Promise<void> {
    return this.db.object(`/users/${uuid}`)
      .set(user).catch(this.handlePromiseError);
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

}
