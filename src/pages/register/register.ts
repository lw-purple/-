import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { FormGroup,FormControl,Validators } from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public country: any = '中国大陆+86'
  public verButton: any = '获取校验码'
  public isVering: Boolean = false
  registerForm:any
  constructor(public navCtrl: NavController,public events: Events, public navParams: NavParams) {
  this.registerForm = new FormGroup({
    country: new FormControl('', Validators.minLength(2)),
    mobile: new FormControl('', Validators.minLength(2)),
    Ver_code: new FormControl('', Validators.minLength(2))
  });
}

  ionViewDidLoad() {
    this.events.subscribe('register:country', data => {
      this.country = data
    })
  }
  doLogin(){

  }
  getVerCode() {
    if (!this.isVering) {
      this.isVering = true
      this.verButton = 60
      var timer = setInterval(() => {
        this.verButton--
        if (this.verButton == 1) {
          clearInterval(timer);
          return this.verButton = '重新获取',this.isVering=false 
        }
      }, 1000)
    }
  }

   openCountry() {
    this.navCtrl.push('CountryPage',{status:'register'})
  }
  openUserAgreement(){
    this.navCtrl.push('UserAgreementPage')
  }
}
