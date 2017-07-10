import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(
    public navCtrl: NavController,
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  Login(){
    this.navCtrl.push('LoginPage')
  }
  Register(){
    this.navCtrl.push('RegisterPage')
  }
}
