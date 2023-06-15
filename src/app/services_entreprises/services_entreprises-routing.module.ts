import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesEntreprisesPageComponent } from './services_entreprises-page/services_entreprises-page.component';

const routes: Routes = [
  {path: '',
  component: ServicesEntreprisesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesEntreprisesRoutingModule { }
