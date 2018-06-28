import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { SavePage } from '../save/save';

/**
 * Generated class for the Sloth2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sloth2',
  templateUrl: 'sloth2.html',
})
export class Sloth2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToPayment() {
    console.log("Navigating...")
    this.navCtrl.push(PaymentPage);
  }

  navigateToSave() {
    console.log("Navigating...")
    this.navCtrl.push(SavePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sloth2Page');
  }

}
