import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BookService } from '../../providers/book/book.service';

import { HomePage } from '../home/home';
import { Book } from '../../models/book.model';

@IonicPage()
@Component({
  selector: 'page-book-add',
  templateUrl: 'book-add.html',
})
export class BookAddPage {
  book: Book = {
    title: '',
    edition: '',
    obs: '',
    price: undefined,
    year: undefined
  };

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public bookService: BookService
  ) {

  }

  addBook(book: Book) {
    this.bookService.addBook(book).then(ref => {
      console.log(ref.key)
      this.navCtrl.setRoot(HomePage, {key: ref.key});
    });
  }

}