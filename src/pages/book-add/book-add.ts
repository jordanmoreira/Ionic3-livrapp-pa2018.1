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
  //bookForm: FormGroup;

  book: Book = {
    title: '',
    edition: '',
    year: undefined
  };

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public bookService: BookService
  ) {

    // this.bookForm = this.formBuilder.group({
    //   title: ['', [Validators.required]],
    //   edition: ['', [Validators.required, Validators.minLength(1)]],
    //   year: ['', [Validators.required, Validators.minLength(4)]],
    // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAddPage');
  }

  addBook(book: Book) {
    this.bookService.addBook(book).then(ref => {
      console.log(ref.key)
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

  // onSubmit(): void {
  //   let formBook = this.bookForm.value;
  //   this.bookService.create(formBook)
  //     .then(() => {
  //       console.log("Livro cadastrado com sucesso!");
  //       this.navCtrl.setRoot(HomePage);
  //     });
  // }
}