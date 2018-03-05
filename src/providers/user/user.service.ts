import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import { User } from '../../models/user.model';

@Injectable()
export class UserService {

  users: Observable<User[]>;
  //public users = this.db.list<User>('users');

  constructor(
    public db: AngularFireDatabase,
    public http: HttpModule
  ) {
    
    //this.users = this.db.object(`/users`).valueChanges();
  }

  create(user: User): Promise<void> {
    return this.db.object(`/users`)
      .set(user);
  }

}
