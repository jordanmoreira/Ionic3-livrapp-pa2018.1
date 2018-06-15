import { Book } from './../../models/book.model';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { BaseService } from '../base.service';
import { FirebaseApp } from 'angularfire2';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class BookService extends BaseService {

  // Já deixei o "booksListRef" como um AngularFireList de livros.
  booksListRef: AngularFireList<Book>;     //this.db.list<Book>('books');
  books: Observable<Book[]>;
  currentBook: AngularFireObject<Book>;
  booksListGeneral: AngularFireList<Book>;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: HttpModule

  ) {
    super();

    //Chamando o método que incrementa o booksListRef
    this.getBooksList();


    // this.books = this.db.list<Book>('/books').valueChanges();
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
    // let booksList: AngularFireList<Book>;
    this.booksListGeneral = this.db.list<Book>('books');
    return this.booksListGeneral;
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
