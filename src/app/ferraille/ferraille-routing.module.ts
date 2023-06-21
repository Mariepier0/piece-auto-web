import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FerraillePageComponent } from './ferraille-page/ferraille-page.component';

const routes: Routes = [
  {path: '',
  component: FerraillePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FerrailleRoutingModule { }
