import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConteneursRoutingModule } from './conteneurs-routing.module';
import { ConteneursPageComponent } from './conteneurs-page/conteneurs-page.component';

@NgModule({
  imports: [
    CommonModule,
    ConteneursRoutingModule
  ],
  declarations: [ConteneursPageComponent]
})
export class ConteneursModule { }
