import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAccueilPage } from './page-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: PageAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAccueilPageRoutingModule {}
