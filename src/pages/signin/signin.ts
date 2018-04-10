import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../providers/auth/auth.service';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { SchoolAddPage } from '../school-add/school-add';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    let loading: Loading = this.showLoading();

    this.authService.signinWithEmail(this.signinForm.value)
      .then((isLogged: boolean) => {
        
        if(isLogged) {
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();
        }

      }).catch((error: any) =>{
        console.log(error);
        loading.dismiss();
        this.showAlert(error);
      });
  }

  onSignUp(): void {
    this.navCtrl.push(SignupPage);
  }


  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });
    loading.present();
    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

  onHomePage(): void  {
    this.navCtrl.push(HomePage)
      .then((hasAccess: boolean) => {
        console.log('Autorizado: ', hasAccess);
      }).catch;(error => {
        console.log('Não autorizado; ', error);
      });
  }

  onSchoolAddPage(): void {
    this.navCtrl.push(SchoolAddPage);
  }

  onLogout(): void {
    this.authService.logout();
  }

}
