import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { ResetComfPage } from '../reset-comf/reset-comf';

/**
 * Generated class for the ResetPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-pass',
  templateUrl: 'reset-pass.html',
})
export class ResetPassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goSignUp():void{
    this.navCtrl.push(SignUpPage);
  }
  goComf():void{
    this.navCtrl.push(ResetComfPage);
  }
  goBack():void{
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPassPage');
  }

}
