import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesEntreprisesRoutingModule } from './services_entreprises-routing.module';
import { ServicesEntreprisesPageComponent } from './services_entreprises-page/services_entreprises-page.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesEntreprisesRoutingModule
  ],
  declarations: [ServicesEntreprisesPageComponent]
})
export class ServicesEntreprisesModule { }
