import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SavePage } from '../save/save';
import { HistoryPage } from '../history/history';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {}
    
  navigateToHome() {
    console.log("Navigating...")
    this.navCtrl.push(HomePage);
    }

  navigateToSave() {
    console.log("Navigating...")
    this.navCtrl.push(SavePage);
    }

  navigateToHistory() {
    console.log("Navigating...")
    this.navCtrl.push(HistoryPage);
    }

  
}
