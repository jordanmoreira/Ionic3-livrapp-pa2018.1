import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs';

import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';
import { AuthService } from '../../providers/auth/auth.service';

import { ChatPage } from '../chat/chat';
import { SignupPage } from './../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Observable<User[]>;
  view: string = 'chats';

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public userService: UserService
  ) {

  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    this.users = this.userService.users;
  }

  onChatCreate(recipientUser: User): void {
    this.navCtrl.push(ChatPage, {
      recipientUser: recipientUser
    });
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage)
  }

}
