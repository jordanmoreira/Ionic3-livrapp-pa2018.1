import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs';

import { SignupPage } from './../signup/signup';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Observable<User[]>;
  
  constructor(
    public navCtrl: NavController,
    public userService: UserService
  ) {

  }

  ionViewDidLoad() {
    this.users = this.userService.users;
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage)
  }

}
