import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsPage } from '../terms/terms';
import { PhotoUpPage } from '../photo-up/photo-up';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goSignUp():void{
    this.navCtrl.push(SignUpPage);
  }
  goTerms():void{
    this.navCtrl.push(TermsPage);
  }
  goBack():void{
    this.navCtrl.pop();
  }
  goPhotoUp():void{
    this.navCtrl.push(PhotoUpPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
}
