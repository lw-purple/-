import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Navbar, NavParams, Events } from 'ionic-angular';
import { FormGroup,Validators,FormControl } from '@angular/forms';
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
   baseLoginForm:any
   mobileLoginForm:any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events
  ) {
    this.baseLoginForm = new FormGroup({
    
    petname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
   
  });
  this.mobileLoginForm= new FormGroup({
    country: new FormControl(this.country, Validators.required),
     mobile: new FormControl('', [Validators.required,Validators.pattern( /^1[34578]\d{9}$/)]),
    Ver_code: new FormControl('', Validators.required),
  })

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
