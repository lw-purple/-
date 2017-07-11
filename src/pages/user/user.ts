import { Component,ViewChild,NgZone  } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';

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
  public headerColor:any
  public images:any=[]
  @ViewChild(Content) content: Content;
  constructor(
    public navCtrl: NavController,
    public zone: NgZone
    ) {
     
    }

  ionViewDidLoad() {
    
  }
  scrollHandler($event){
    this.zone.run(()=>{
     if($event.scrollTop >= 500){
       this.headerColor='rgba(000,255,000,1)'
     }else{
     this.headerColor='rgba(000,255,000,'+( $event.scrollTop / 500) + ')'       
     }
    })
  }
  Login(){
    this.navCtrl.push('LoginPage')
  }
  Register(){
    this.navCtrl.push('RegisterPage')
  }
}
