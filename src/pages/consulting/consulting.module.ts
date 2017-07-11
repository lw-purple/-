import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultingPage } from './consulting';

@NgModule({
  declarations: [
    ConsultingPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultingPage),
  ],
  exports: [
    ConsultingPage
  ]
})
export class ConsultingPageModule {}
