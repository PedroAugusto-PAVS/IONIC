import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-itens',
  templateUrl: 'itens.page.html',
  styleUrls: ['itens.page.scss'],
})
export class ItensPage {
  itens: any[] = [];
  segmento: string = 'nao_comprados';

  constructor(private router: Router, private http: HttpClient) {}

  
  

  ionViewWillEnter() {
    this.carregarItens();
  }

  carregarItens() {
    const userId = localStorage.getItem('usuarios_id');
    this.http.post('http://localhost/apisIonic/api/itens.php', {
      action: 'list',
      usuarios_id: userId
    }).subscribe((response: any) => {
      this.itens = response.filter((item: { purchased: boolean; }) => item.purchased === (this.segmento === 'comprado'));
    });
  }

  logout() {
    localStorage.removeItem('usuarios_id');
    this.router.navigate(['/login']);
  }

  addItem() {
    this.router.navigate(['/add-item']);
  }

  editItem(item: any) {
    this.router.navigate(['/edit-item', { id: item.id }]);
  }

  deleteItem(id: number) {
    const userId = localStorage.getItem('usuarios_id');
    this.http.post('http://localhost/apisIonic/api/itens.php', {
      action: 'delete',
      id: id,
      usuarios_id: userId
    }).subscribe(() => {
      this.carregarItens();
    });
  }

}
