import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'visualizar-dados-obj', //Adicionado agora a pouco
    loadChildren: () => import('./visualizar-dados-obj/visualizar-dados-obj.module').then( m => m.VisualizarDadosObjPageModule)
  },
  {
    path: 'visualizar-dados-obj/:posicao',
    loadChildren: () => import('./visualizar-dados-obj/visualizar-dados-obj.module').then( m => m.VisualizarDadosObjPageModule)
  },
  {
    path: 'editar-obj',
    loadChildren: () => import('./editar-obj/editar-obj.module').then( m => m.EditarObjPageModule)
  },
  {
    path: 'editar-obj/:item',
    loadChildren: () => import('./editar-obj/editar-obj.module').then( m => m.EditarObjPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
