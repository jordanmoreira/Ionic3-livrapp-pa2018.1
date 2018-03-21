import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Chat } from '../../models/chat.model';
import { BaseService } from '../base.service';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService extends BaseService {

  chats: AngularFireList<Chat>;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public http: Http
  ) {
    super();
    this.setChats();
  }

  private setChats(): void {
    this.afAuth.authState
      .subscribe((authUser: firebase.User) => {
        if (authUser) {

          this.chats = this.db.list<Chat>(`/chats/${authUser.uid}`, 
            (ref: firebase.database.Reference) => ref.orderByChild('timestamp')
          );

        }
      });
  }

  create(chat: Chat, userId1: string, userId2: string): Promise<void> {
    return this.db.object<Chat>(`/chats/${userId1}/${userId2}`)
      .set(chat)
      .catch(this.handlePromiseError);
  }

  getDeepChat(userId1: string, userId2: string): AngularFireObject<Chat> {
    return this.db.object<Chat>(`/chats/${userId1}/${userId2}`);
  }
}
