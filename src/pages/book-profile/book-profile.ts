import { HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BookService } from '../../providers/book/book.service';

import { Book } from '../../models/book.model';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-book-profile',
  templateUrl: 'book-profile.html',
})
export class BookProfilePage {

  book: Book;
  canEdit: boolean = false;
  uploadProgress: number;
  private filePhoto: File;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public bookService: BookService,
    public http: HttpModule
  ) {
  }

  ionViewWillLoad() {
    this.book = this.navParams.get('book');
  }

  saveBook(book: Book) {
    this.bookService.editBook(book).then(() => {
      console.log("sucesso");
      this.navCtrl.setRoot(HomePage);
    });
  }

  removeBook(book: Book) {
    this.bookService.removeBook(book).then(() => {
      console.log("sucesso");
      this.navCtrl.setRoot(HomePage);
    });
  }

}
