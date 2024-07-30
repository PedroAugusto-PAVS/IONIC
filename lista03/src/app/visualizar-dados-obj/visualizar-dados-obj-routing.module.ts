import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarDadosObjPage } from './visualizar-dados-obj.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarDadosObjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarDadosObjPageRoutingModule {}
