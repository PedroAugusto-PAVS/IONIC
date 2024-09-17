import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-item',
  templateUrl: 'edit-item.page.html',
  styleUrls: ['edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
  nome: string = '';
  quantidade: number = 1;
  preco: number = 0;
  adquirido: boolean = false;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = parseInt(idParam, 10);
      this.loadItem();
    } else {
      console.error('Parâmetro ID não encontrado na URL');
    }
  }

  loadItem() {
    const userId = localStorage.getItem('usuarios_id');
    this.http.post('http://localhost/apisIonic/api/itens.php', {
      action: 'list',
      usuarios_id: userId
    }).subscribe((response: any) => {
      const item = response.find((item: { id: number; }) => item.id === this.id);
      this.nome = item.nome;
      this.quantidade = item.quantidade;
      this.preco = item.preco;
      this.adquirido = item.adquirido;
    });
  }

  updateItem() {
    const userId = localStorage.getItem('usuarios_id');
    this.http.post('http://localhost/apisIonic/api/itens.php', {
      action: 'update',
      id: this.id,
      nome: this.nome,
      quantidade: this.quantidade,
      preco: this.preco,
      adquirido: this.adquirido,
      usuarios_id: userId
    }).subscribe(() => {
      this.router.navigate(['/itens']);
    });
  }
}
