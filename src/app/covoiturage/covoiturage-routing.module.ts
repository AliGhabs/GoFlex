import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovoituragePage } from './covoiturage.page';

const routes: Routes = [
  {
    path: '',
    component: CovoituragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovoituragePageRoutingModule {}
