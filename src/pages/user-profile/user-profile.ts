import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';
import { UserService } from '../../providers/user/user.service';

import { User } from '../../models/user.model';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  currentUser: User;
  canEdit: boolean = false;
  uploadProgress: number;
  private filePhoto: File;

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {
  }

  ionViewDidLoad() {
    this.userService.currentUser
      .valueChanges()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.editUser();
    
    //if (this.filePhoto) {

      //   let uploadTask = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);

      //   uploadTask.on('state_changed', (snapshot: firebase.storage.UploadTaskSnapshot) => {

      //     this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

      //   }, (error: Error) => {
      //     // catch error
      //   });

      //   uploadTask.then((UploadTaskSnapshot: firebase.storage.UploadTaskSnapshot) => {
      //     this.editUser(uploadTask.snapshot.downloadURL);
      //   });

      // } else {
      //   this.editUser();
      // }

    //}
  }

  private editUser(photoUrl?: string): void {
    this.userService
      .edit({
        name: this.currentUser.name,
        username: this.currentUser.username,
        photo: photoUrl || this.currentUser.photo || ''
      }).then(() => {
        this.canEdit = false;
        this.filePhoto = undefined;
        this.uploadProgress = 0;
      });
  }
}
