import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { BaseService } from '../base.service';

import { Book } from '../../models/book.model';

import * as firebase from 'firebase/app';

@Injectable()
export class BookService extends BaseService {

  private booksRef = this.db.list<Book>('books');
  books: Observable<Book[]>;

  constructor(
    public db: AngularFireDatabase,
    public http: HttpClient

  ) {
    super();
    this.books = this.db.list<Book>('/books').valueChanges();
  }

  getBooks() {
    return this.booksRef;
  }
  create(book: Book) {
    return this.booksRef.push(book);
  }

  // create(book: Book): Promise<void> {
  //   return this.db.object(`/books/`)
  //     .set(book);
  // }
}
