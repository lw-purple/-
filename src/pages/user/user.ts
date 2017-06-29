import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

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
    public modalCtrl:ModalController
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  Login(){
    this.modalCtrl.create('LoginPage',{},{cssClass:'modal'}).present()
  }
  Register(){
    this.modalCtrl.create('Register').present()
  }
}
