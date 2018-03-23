import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CustomLoggedHeaderComponent } from '../components/custom-logged-header/custom-logged-header.component';
import { UserInfoComponent } from '../components/user-info/user-info.component';
import { UserMenuComponent } from '../components/user-menu/user-menu.component';

import { AboutPage } from '../pages/about/about';
import { BookAddPage } from '../pages/book-add/book-add';
import { BookPage } from '../pages/book/book';
import { ChatPage } from '../pages/chat/chat';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from './../pages/signup/signup';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { TabsPage } from '../pages/tabs/tabs';

import { CapitalizePipe } from '../pipes/capitalize.pipe';

import { AuthService } from '../providers/auth/auth.service';
import { BookService } from '../providers/book/book.service';
import { ChatService } from '../providers/chat/chat.service';
import { MessageService } from '../providers/message/message.service';
import { UserService } from '../providers/user/user.service';


const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDFA-RjwPzELId63w9ry4o2Y7p11tq_E7Y",
  authDomain: "livrapp-9d933.firebaseapp.com",
  databaseURL: "https://livrapp-9d933.firebaseio.com",
  projectId: "livrapp-9d933",
  storageBucket: "livrapp-9d933.appspot.com",
  messagingSenderId: "153649161564"
};

@NgModule({
  declarations: [
    CapitalizePipe,
    ChatPage,
    CustomLoggedHeaderComponent,
    MyApp,
    AboutPage,
    BookAddPage,
    BookPage,
    ContactPage,
    HomePage,
    SigninPage,
    SignupPage,
    BookAddPage,
    TabsPage,
    UserMenuComponent,
    UserInfoComponent,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    BookAddPage,
    BookPage,
    ContactPage,
    ChatPage,
    HomePage,
    SigninPage,
    SignupPage,
    UserProfilePage,
    TabsPage
  ],
  providers: [
    AuthService,
    BookService,
    ChatService,
    MessageService,
    StatusBar,
    AngularFireAuthModule,
    SplashScreen,
    UserService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
