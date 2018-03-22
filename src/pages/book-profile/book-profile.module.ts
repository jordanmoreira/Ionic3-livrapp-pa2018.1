import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookProfilePage } from './book-profile';

@NgModule({
  declarations: [
    BookProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(BookProfilePage),
  ],
})
export class BookProfilePageModule {}
