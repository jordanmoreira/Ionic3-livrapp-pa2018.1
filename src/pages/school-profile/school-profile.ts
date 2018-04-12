import { HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { School } from '../../models/school.model';
import { SchoolService } from '../../providers/school/school.service';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-school-profile',
  templateUrl: 'school-profile.html',
})
export class SchoolProfilePage {
  school: School;
  canEdit: boolean = false;
  uploadProgress: number;
  private filePhoto: File;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public schoolService: SchoolService,
    public http: HttpModule
  ) {
  }

  ionViewWillLoad() {
    this.school = this.navParams.get('school');
  }

  saveSchool(school: School) {
    this.schoolService.editSchool(school).then(() => {
      console.log("sucesso");
      this.navCtrl.setRoot(HomePage);
    });
  }

  removeSchool(school: School) {
    this.schoolService.removeSchool(school).then(() => {
      console.log("sucesso");
      this.navCtrl.setRoot(HomePage);
    });
  }

}
