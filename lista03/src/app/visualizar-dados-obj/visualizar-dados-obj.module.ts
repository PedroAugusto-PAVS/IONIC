import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarDadosObjPageRoutingModule } from './visualizar-dados-obj-routing.module';

import { VisualizarDadosObjPage } from './visualizar-dados-obj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarDadosObjPageRoutingModule
  ],
  declarations: [VisualizarDadosObjPage]
})
export class VisualizarDadosObjPageModule {}
