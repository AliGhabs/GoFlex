import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionEntreprisePageRoutingModule } from './inscription-entreprise-routing.module';

import { InscriptionEntreprisePage } from './inscription-entreprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionEntreprisePageRoutingModule
  ],
  declarations: [InscriptionEntreprisePage]
})
export class InscriptionEntreprisePageModule {}
