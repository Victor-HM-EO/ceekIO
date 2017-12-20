import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'terms',
  segment:'Terminos'
})
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goBack():void{
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

}
