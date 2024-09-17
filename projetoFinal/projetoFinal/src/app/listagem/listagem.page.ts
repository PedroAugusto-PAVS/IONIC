import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  itens: any[] = [];
  nome: string = '';
  quantidade: number = 0;
  preco: number = 0;
  itemEditandoId: number | null = null;  // ID do item sendo editado

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit() {
    this.carregarItens();
  }

  // Carregar itens do banco de dados
  carregarItens() {
    this.itemService.getItens().subscribe(data => {
      this.itens = data;
    }, error => {
      console.error('Erro ao carregar itens:', error);
    });
  }

  /// Função para adicionar ou atualizar item
adicionarOuEditarItem() {
  if (this.nome && this.quantidade > 0 && this.preco > 0) {
    const item = { nome: this.nome, quantidade: this.quantidade, preco: this.preco };

    if (this.itemEditandoId) {
      // Se houver um item sendo editado, atualize-o
      this.itemService.editItem(this.itemEditandoId, item).subscribe(() => {
        this.carregarItens();
        this.limparFormulario();
      }, (error: any) => {  // Define o tipo de 'error' como 'any'
        console.error('Erro ao atualizar item:', error);
      });
    } else {
      // Caso contrário, adicione um novo item
      this.itemService.addItem(item).subscribe(() => {
        this.carregarItens();
        this.limparFormulario();
      }, (error: any) => {  // Define o tipo de 'error' como 'any'
        console.error('Erro ao adicionar item:', error);
      });
    }
  } else {
    alert('Preencha todos os campos corretamente.');
  }
}

  // Função para preparar a edição de um item
  editarItem(id: number) {
    const item = this.itens.find(item => item.id === id);
    if (item) {
      this.nome = item.nome;
      this.quantidade = item.quantidade;
      this.preco = item.preco;
      this.itemEditandoId = id;  // Definir o item a ser editado
    }
  }

  // Função para deletar item
  deletarItem(id: number) {
    this.itemService.deleteItem(id).subscribe(() => {
      this.carregarItens();
    }, error => {
      console.error('Erro ao excluir item:', error);
    });
  }

  // Função para limpar o formulário após adicionar ou editar um item
  limparFormulario() {
    this.nome = '';
    this.quantidade = 0;
    this.preco = 0;
    this.itemEditandoId = null;
  }

  // Função para fazer logout
  logout() {
    this.itemService.logout();
    this.router.navigate(['/login']);
  }
}
