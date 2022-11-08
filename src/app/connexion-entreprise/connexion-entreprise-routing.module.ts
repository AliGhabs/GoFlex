import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionEntreprisePage } from './connexion-entreprise.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionEntreprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionEntreprisePageRoutingModule {}
