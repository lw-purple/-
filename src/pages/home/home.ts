import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
   public images:any=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.images=[{
        url:'assets/image/1 (1).jpg'
      },{
        url:'assets/image/1 (2).jpg'
      },{
        url:'assets/image/1 (3).jpg'
      },{
        url:'assets/image/1 (4).jpg'
      },{
        url:'assets/image/1 (5).jpg'
      },{
        url:'assets/image/1 (6).jpg'
      }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
