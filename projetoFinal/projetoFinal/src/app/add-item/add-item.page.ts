import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  templateUrl: 'add-item.page.html',
  styleUrls: ['add-item.page.scss'],
})
export class AddItemPage {
  nome: string = '';
  quantidade: number = 1;
  preco: number = 0;

  constructor(private router: Router, private http: HttpClient) {}

  addItem() {
    const userId = localStorage.getItem('user_id');
    this.http.post('http://localhost/apisIonic/api/items.php', {
      action: 'add',
      nome: this.nome,
      quantidade: this.quantidade,
      preco: this.preco,
      usuarios_id: userId
    }).subscribe(() => {
      this.router.navigate(['/itens']);
    });
  }
}
