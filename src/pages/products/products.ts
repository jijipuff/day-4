import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sloth1Page } from '../sloth1/sloth1';
import { Sloth2Page } from '../sloth2/sloth2';
import { Sloth3Page } from '../sloth3/sloth3';
import { Sloth4Page } from '../sloth4/sloth4';
import { Sloth5Page } from '../sloth5/sloth5';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToSloth1() {
    console.log("Navigating...")
    this.navCtrl.push(Sloth1Page);
  } 
  navigateToSloth2() {
    console.log("Navigating...")
    this.navCtrl.push(Sloth2Page);

  } navigateToSloth3() {
    console.log("Navigating...")
    this.navCtrl.push(Sloth3Page);

  } navigateToSloth4() {
    console.log("Navigating...")
    this.navCtrl.push(Sloth4Page);

  } navigateToSloth5() {
    console.log("Navigating...")
    this.navCtrl.push(Sloth5Page);
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

}
 