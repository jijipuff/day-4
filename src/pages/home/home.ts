import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  navigateToRegister() {
    console.log("Navigating...")
    this.navCtrl.push(RegistrationPage);
  }

}
