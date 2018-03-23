import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { BaseService } from '../base.service';
import { FirebaseApp } from 'angularfire2';

import { Book } from '../../models/book.model';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class BookService extends BaseService {

  private booksListRef = this.db.list<Book>('books');
  books: Observable<Book[]>;
  currentBook: AngularFireObject<Book>;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: HttpModule

  ) {
    super();
    this.books = this.db.list<Book>('/books').valueChanges();
  }

  getBooksList() {
    return this.booksListRef;
  }

  addBook(book: Book) {
    return this.booksListRef.push(book);
  }

  editBook(book: Book) {
    return this.booksListRef.update(book.key, book);
  }

  removeBook(book: Book) {
    return this.booksListRef.remove(book.key);
  }

  get(bookId: string): AngularFireObject<Book> {
    return this.db.object<Book>(`/books/${bookId}`);
  }
  
}
