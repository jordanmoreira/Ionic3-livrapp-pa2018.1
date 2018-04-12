import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicPageModule } from 'ionic-angular';
import { SchoolProfilePage } from './school-profile';

@NgModule({
  declarations: [
    SchoolProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolProfilePage),
  ],
})
export class SchoolProfilePageModule {}
