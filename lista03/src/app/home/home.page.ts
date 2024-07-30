import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public rota : Router) {}

  cadastro(){
    this.rota.navigate(['/cadastro'])
  }

  listar(){
    this.rota.navigate(['/listar-dados'])
  }

  visualizar(){
    this.rota.navigate(['/visualizar-dados-obj'])
  }

}
