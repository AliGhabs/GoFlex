import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterpagePageRoutingModule } from './routerpage-routing.module';

import { RouterpagePage } from './routerpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterpagePageRoutingModule
  ],
  declarations: [RouterpagePage]
})
export class RouterpagePageModule {}
