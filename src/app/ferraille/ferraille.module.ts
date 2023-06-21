import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FerrailleRoutingModule } from './ferraille-routing.module';
import { FerraillePageComponent } from './ferraille-page/ferraille-page.component';

@NgModule({
  imports: [
    CommonModule,
    FerrailleRoutingModule
  ],
  declarations: [FerraillePageComponent]
})
export class FerrailleModule { }
