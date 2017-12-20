import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResetComfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'comf',
  segment:'Comf'
})
@Component({
  selector: 'page-reset-comf',
  templateUrl: 'reset-comf.html',
})
export class ResetComfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goBack():void{
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetComfPage');
  }

}
