import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { FormGroup,FormControl,Validators } from '@angular/forms';
/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {
  public country: any = '中国大陆+86'
  public verButton: any = '获取校验码'
  public isVering: Boolean = false
  forgetForm:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
  this.forgetForm = new FormGroup({
    country: new FormControl(this.country, Validators.required),
    mobile: new FormControl('', Validators.required),
    Ver_code: new FormControl('', Validators.required)
  });
}

  ionViewDidLoad() {
    this.events.subscribe('forget:country', data => {
      this.country = data
    })
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
  doLogin(){

  }
   openCountry() {
    this.navCtrl.push('CountryPage',{status:'forget'})
  }
}
