import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovoituragePageRoutingModule } from './covoiturage-routing.module';

import { CovoituragePage } from './covoiturage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovoituragePageRoutingModule
  ],
  declarations: [CovoituragePage]
})
export class CovoituragePageModule {}
