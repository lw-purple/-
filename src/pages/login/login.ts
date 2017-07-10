import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Navbar, NavParams, Events } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public login: any = 'basic'
  public country: any = '中国大陆+86'
  public verButton: any = '获取校验码'
  public isVering: Boolean = false
  public loginForm = this.fb.group({
    country: [this.country],
    petname: ["", Validators.required],
    password: ["", Validators.required],
    mobile: ["", Validators.required],
    Ver_code: ["", Validators.required]
  });
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public events: Events
  ) {


  }

  ionViewDidLoad() {
    this.events.subscribe('login:country', data => {
      this.country = data
    })

  }
  segmentChanged($event) {
    if ($event.value == 'basic') {
      // this.loginForm
    }
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
  doLogin(event) {
    console.log(this.login)
    console.log(this.loginForm.value);
  }
  openCountry() {
    this.navCtrl.push('CountryPage',{status:'login'})
  }
  openRegister(){
    this.navCtrl.push('RegisterPage')
  }
  openForgetPassword(){
    this.navCtrl.push('ForgetPasswordPage')
  }
}
