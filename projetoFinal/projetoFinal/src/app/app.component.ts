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
    { title: 'Adicionar Item', url: '/add-item', icon: 'people' },
    { title: 'Editar Item', url: '/edit-item', icon: 'people' },
    { title: 'Itens', url: '/itens', icon: 'people' },
  ];
 
  constructor() {}
}
