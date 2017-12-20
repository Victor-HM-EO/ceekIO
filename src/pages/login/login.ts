import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'login',
  segment:'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goBack():void{
    this.navCtrl.pop();
  }
  go(target:string):void{
    this.navCtrl.push(target);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
