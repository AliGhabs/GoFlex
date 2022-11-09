import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAccueilPageRoutingModule } from './page-accueil-routing.module';

import { PageAccueilPage } from './page-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAccueilPageRoutingModule
  ],
  declarations: [PageAccueilPage]
})
export class PageAccueilPageModule {}
