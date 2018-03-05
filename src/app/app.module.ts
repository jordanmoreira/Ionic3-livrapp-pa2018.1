import { HttpModule } from '@angular/http';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from "angularfire2/database";
//import { FIREBASE_CONFIG} from './firebase.credentials';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { SignupPage } from './../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';

import { UserService } from '../providers/user/user.service';
import { AuthService } from '../providers/auth/auth.service';



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
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SignupPage,
    TabsPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    UserService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
