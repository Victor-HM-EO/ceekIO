import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoUpPage } from './photo-up';

@NgModule({
  declarations: [
    PhotoUpPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoUpPage),
  ],
})
export class PhotoUpPageModule {}
