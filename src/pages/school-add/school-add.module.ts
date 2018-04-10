import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolAddPage } from './school-add';

@NgModule({
  declarations: [
    SchoolAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolAddPage),
  ],
})
export class SchoolAddPageModule {}
