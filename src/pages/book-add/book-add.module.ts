import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAddPage } from './book-add';

@NgModule({
  declarations: [
    BookAddPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAddPage),
  ],
})
export class BookAddPageModule {}
