import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../providers/user/user.service';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;

  constructor(
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
    this.userService.create(this.signupForm.value)
      .then(() => {
        console.log("Usuario cadastrado com sucesso!");
      });
  }

}
