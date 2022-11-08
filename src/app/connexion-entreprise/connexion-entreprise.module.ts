import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionEntreprisePageRoutingModule } from './connexion-entreprise-routing.module';

import { ConnexionEntreprisePage } from './connexion-entreprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionEntreprisePageRoutingModule
  ],
  declarations: [ConnexionEntreprisePage]
})
export class ConnexionEntreprisePageModule {}
