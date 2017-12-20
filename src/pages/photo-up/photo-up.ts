import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'photo',
  segment:'Photo'
})
@Component({
  selector: 'page-photo-up',
  templateUrl: 'photo-up.html',
})
export class PhotoUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goBack():void{
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoUpPage');
  }

}
