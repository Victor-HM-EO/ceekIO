import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'reset',
  segment:'Reset'
})
@Component({
  selector: 'page-reset-pass',
  templateUrl: 'reset-pass.html',
})
export class ResetPassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  go(target:string):void{
    this.navCtrl.push(target);
  }
  goBack():void{
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPassPage');
  }

}
