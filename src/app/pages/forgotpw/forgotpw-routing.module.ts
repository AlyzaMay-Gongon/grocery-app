import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpwPage } from './forgotpw.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpwPageRoutingModule {}
