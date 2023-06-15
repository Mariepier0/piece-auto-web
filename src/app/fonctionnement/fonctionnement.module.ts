import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FonctionnementRoutingModule } from './fonctionnement-routing.module';
import { FonctionnementPageComponent } from './fonctionnement-page/fonctionnement-page.component';

@NgModule({
  imports: [
    CommonModule,
    FonctionnementRoutingModule
  ],
  declarations: [FonctionnementPageComponent]
})
export class FonctionnementModule { }
