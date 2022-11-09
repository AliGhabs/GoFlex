import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterpagePage } from './routerpage.page';

const routes: Routes = [
  {
    path: '',
    component: RouterpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouterpagePageRoutingModule {}
