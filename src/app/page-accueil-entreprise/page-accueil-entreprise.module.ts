import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAccueilEntreprisePageRoutingModule } from './page-accueil-entreprise-routing.module';

import { PageAccueilEntreprisePage } from './page-accueil-entreprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAccueilEntreprisePageRoutingModule
  ],
  declarations: [PageAccueilEntreprisePage]
})
export class PageAccueilEntreprisePageModule {}
