import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'signUp',
  segment:'signUp'
})
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  go(target:string):void{
    this.navCtrl.push(target);
  }
  goBack():void{
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
}
