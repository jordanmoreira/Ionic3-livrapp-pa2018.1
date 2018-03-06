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

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { AuthService } from '../providers/auth/auth.service';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from './../pages/signup/signup';
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
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SigninPage,
    SignupPage,
    TabsPage
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
    ContactPage,
    HomePage,
    SigninPage,
    SignupPage,
    TabsPage
  ],
  providers: [
    AuthService,
    StatusBar,
    AngularFireAuthModule,
    SplashScreen,
    UserService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
