import { Book } from './../../models/book.model';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { BaseService } from '../base.service';
import { FirebaseApp } from 'angularfire2';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user.model';

@Injectable()
export class BookService extends BaseService {

  booksListRef: AngularFireList<Book>;
  books: Observable<Book[]>;
  currentBook: AngularFireObject<Book>;
  allBooksListRef: AngularFireList<Book>;
  allBooks: Observable<Book[]>;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: HttpModule

  ) {
    super();

    //Chamando o método que incrementa o booksListRef e o allBooksListRef
    this.getBooksList();
    this.getBooksListGeneral();
  }

  getBooksList() {
    this.afAuth.authState
      .subscribe((authState: firebase.User) => {
        //Verificando se existe um usuário logado e adicionando o id na lista de livros.
        if (authState) {
          this.booksListRef = this.db.list<Book>(`/books/${authState.uid}`);
          this.books = this.booksListRef.valueChanges();
        }
      })
    return this.booksListRef;
  }

  getBooksListGeneral() {
    this.allBooksListRef = this.db.list<Book>(`/allbooks`);
    this.allBooks = this.allBooksListRef.valueChanges();

    return this.allBooksListRef;
  }

  addBook(book: Book) {
    return this.booksListRef.push(book), this.allBooksListRef.push(book);
  }

  editBook(book: Book) {
    return this.booksListRef.update(book.key, book), this.allBooksListRef.update(book.key, book);
  }

  removeBook(book: Book) {
    return this.booksListRef.remove(book.key), this.allBooksListRef.remove(book.key);
  }

  get(bookId: string): AngularFireObject<Book> {
    return this.db.object<Book>(`/books/${bookId}`);
  }

}
