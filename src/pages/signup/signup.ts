import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../providers/user/user.service';
import { AuthService } from '../../providers/auth/auth.service';

import * as firebase from 'firebase/app';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;

  constructor(
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }

  onSubmit(): void {

    let user = this.signupForm.value;

    this.authService.createAuthUser({
      email: user.email,
      password: user.password
    }).then((authUser: firebase.User) => {
      this.userService.create(user)
        .then(() => {
          console.log("Usuario cadastrado com sucesso!");
        });
    });
  }

}
