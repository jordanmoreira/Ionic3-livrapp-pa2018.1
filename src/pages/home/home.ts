import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { Observable } from 'rxjs';

import { Book } from '../../models/book.model';
import { Chat } from '../../models/chat.model';
import { User } from '../../models/user.model';

import { AuthService } from '../../providers/auth/auth.service';
import { BookService } from '../../providers/book/book.service';
import { ChatService } from '../../providers/chat/chat.service';
import { UserService } from '../../providers/user/user.service';

import { ChatPage } from '../chat/chat';
import { SignupPage } from './../signup/signup';

import * as firebase from 'firebase/app';
import { BookProfilePage } from '../book-profile/book-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chats: Observable<Chat[]>;
  users: Observable<User[]>;
  books: Observable<Book[]>;
  view: string = 'chats';

  constructor(
    public authService: AuthService,
    public bookService: BookService,
    public chatService: ChatService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public userService: UserService
  ) {
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    this.chats = this.chatService.mapListKeys<Chat>(this.chatService.chats)
      .map((chats: Chat[]) => chats.reverse());
    this.users = this.userService.users;
    this.books = this.bookService.books;

    this.menuCtrl.enable(true, 'user-menu');
  }

  onChatCreate(recipientUser: User): void {

    this.userService
      .mapObjectKey<User>(this.userService.currentUser)
      .first()
      .subscribe((currentUser: User) => {

        this.chatService
          .mapObjectKey<Chat>(this.chatService.getDeepChat(currentUser.$key, recipientUser.$key))
          .first()
          .subscribe((chat: Chat) => {

            if (!chat.title) {

              let timestamp: Object = firebase.database.ServerValue.TIMESTAMP;

              let chat1 = new Chat('', timestamp, recipientUser.name, (recipientUser.photo || ''));
              this.chatService.create(chat1, currentUser.$key, recipientUser.$key);

              let chat2 = new Chat('', timestamp, currentUser.name, (currentUser.photo || ''));
              this.chatService.create(chat2, recipientUser.$key, currentUser.$key);
            }
          });
      });

    this.navCtrl.push(ChatPage, {
      recipientUser: recipientUser
    });
  }

  onChatOpen(chat: Chat): void {

    let recipientUserId: string = chat.$key;

    this.userService.mapObjectKey<User>(
      this.userService.get(recipientUserId)
    )
      .first()
      .subscribe((user: User) => {

        this.navCtrl.push(ChatPage, {
          recipientUser: user
        });

      });

  }

  onSignup(): void {
    this.navCtrl.push(SignupPage)
  }

  onBookProfile(): void {
    console.log('Editar livro');
    this.navCtrl.push(BookProfilePage);
  }

}
