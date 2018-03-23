import { Component, Input, ViewChild } from '@angular/core';
import { AlertController, App, MenuController, NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';

import { User } from '../../models/user.model';

import { BookAddPage } from '../../pages/book-add/book-add';
import { UserProfilePage } from '../../pages/user-profile/user-profile';

import { BaseComponent } from '../base.component';

import { Book } from '../../models/book.model';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.component.html'
})
export class UserMenuComponent extends BaseComponent {
  @Input('user') currentUser: User;
  
  book: Book = {
    title: '',
    edition: '',
    year: undefined
  };

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authService, app, menuCtrl);
  }

  onProfile(): void {
    console.log('Perfil');
    this.navCtrl.push(UserProfilePage);
  }

  onAddBook(): void {
    console.log('Livros');
    this.navCtrl.push(BookAddPage);
  }
}
