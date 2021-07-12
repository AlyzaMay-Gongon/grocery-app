import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpwPageRoutingModule } from './forgotpw-routing.module';

import { ForgotpwPage } from './forgotpw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpwPageRoutingModule
  ],
  declarations: [ForgotpwPage]
})
export class ForgotpwPageModule {}
