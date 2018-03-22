import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BookAddPage } from '../book-add/book-add';

import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

  onAddBook(): void {
    console.log('Adicionar livro');
    this.navCtrl.push(BookAddPage);
  }

}
