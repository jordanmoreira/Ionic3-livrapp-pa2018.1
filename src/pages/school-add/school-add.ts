import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { School } from '../../models/school.model';
import { FormBuilder } from '@angular/forms';
import { SchoolService } from '../../providers/school/school.service';
import { SigninPage } from '../signin/signin';


@IonicPage()
@Component({
  selector: 'page-school-add',
  templateUrl: 'school-add.html',
})
export class SchoolAddPage {
  school: School = {
    name: '',
    address: '',
    cnpj: '',
    contact: ''
  };

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public schoolService: SchoolService
  ) {

  }

  addSchool(school: School) {
    this.schoolService.addSchool(school).then(ref => {
      console.log(ref.key)
      this.navCtrl.setRoot(SigninPage, {key: ref.key});
    });
  }

}
