import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {}
    
  navigateToLogin() {
    console.log("Navigating...")
    this.navCtrl.push(HomePage);
    }

}
