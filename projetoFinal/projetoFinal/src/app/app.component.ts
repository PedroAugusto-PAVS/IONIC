import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'people' },
    { title: 'Adicionar Item', url: '/adicionar-item', icon: 'people' },
    { title: 'Editar Item', url: '/editar-item', icon: 'people' },
    { title: 'Listar Itens', url: '/listar-itens', icon: 'people' },
  ];
 
  constructor() {}
}
