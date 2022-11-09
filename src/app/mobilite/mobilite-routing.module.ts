import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilitePage } from './mobilite.page';

const routes: Routes = [
  {
    path: '',
    component: MobilitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilitePageRoutingModule {}
