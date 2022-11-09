import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAccueilEntreprisePage } from './page-accueil-entreprise.page';

const routes: Routes = [
  {
    path: '',
    component: PageAccueilEntreprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAccueilEntreprisePageRoutingModule {}
