import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-school-home',
  templateUrl: 'school-home.html',
})
export class SchoolHomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolHomePage');
  }

}
