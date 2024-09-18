import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'listar-itens',
    loadChildren: () => import('./listar-itens/listar-itens.module').then( m => m.ListarItensPageModule)
  },
  {
    path: 'editar-item',
    loadChildren: () => import('./editar-item/editar-item.module').then( m => m.EditarItemPageModule)
  },
  {
    path: 'adicionar-item',
    loadChildren: () => import('./adicionar-item/adicionar-item.module').then( m => m.AdicionarItemPageModule)
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
