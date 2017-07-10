import { Component, ViewChild } from '@angular/core';
import { IonicPage, Navbar, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the CountryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {
  @ViewChild(Navbar) navbar: Navbar;
  public items: any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
  ) {

    this.items = [{
      name: '中国大陆',
      number: '+86'
    }, {
      name: '香港(中国)',
      number: '+852'
    },  {
      name: '澳门(中国)',
      number: '+883'
    }, {
      name: '台湾(中国)',
      number: '+886'
    }, {
      name: '美国',
      number: '+1'
    }, {
      name: '英国',
      number: '+44'
    }, {
      name: '日本',
      number: '+81'
    }, {
      name: '新加坡',
      number: '+65'
    }, {
      name: '韩国',
      number: '+82'
    }]
  }
  ionViewDidLoad() {
    // this.navbar.backButtonClick = (e: UIEvent) => {
    //   console.log(11)
    // }
    console.log('ionViewDidLoad CountryPage');
  }
  do(name, number) {
    let data = name + number
    this.events.publish(this.navParams.data.status+':country', data)
    this.navCtrl.pop()
  }
}
