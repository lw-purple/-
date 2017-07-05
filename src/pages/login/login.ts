import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Navbar, NavParams,ViewController,Events } from 'ionic-angular';
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
  public login:any='basic'
  public country:any=''
  public loginForm = this.fb.group({
    country:[this.country],
    petname: ["", Validators.required],
    password: ["", Validators.required]
  });
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public fb: FormBuilder,
    public events:Events
    ) {
     

  }
 
  ionViewDidLoad() {
     this.events.subscribe('country',data=>{
       this.country=data
    })
    
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }
  doLogin(event) {
    console.log(this.loginForm.value);
  }
  openCountry(){
    this.navCtrl.push('CountryPage')
  }
}
