import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FonctionnementPageComponent } from './fonctionnement-page/fonctionnement-page.component';

const routes: Routes = [
  {path: '',
  component: FonctionnementPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonctionnementRoutingModule { }
