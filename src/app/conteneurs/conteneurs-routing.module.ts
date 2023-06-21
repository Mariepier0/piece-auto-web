import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConteneursPageComponent } from './conteneurs-page/conteneurs-page.component';

const routes: Routes = [
  {path: '',
  component: ConteneursPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConteneursRoutingModule { }
