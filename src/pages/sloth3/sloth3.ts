import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { SavePage } from '../save/save';

/**
 * Generated class for the Sloth3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sloth3',
  templateUrl: 'sloth3.html',
})
export class Sloth3Page {

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
    console.log('ionViewDidLoad Sloth3Page');
  }

}
