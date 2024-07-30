import { Component, OnInit } from '@angular/core';
import { DadosFormulario } from '../models/dadosFormulario';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listar-dados',
  templateUrl: './listar-dados.page.html',
  styleUrls: ['./listar-dados.page.scss'],
})
export class ListarDadosPage implements OnInit {

  dadosTela : DadosFormulario[] = [];
  posicao : number = 0;
  indexObj : number;

  constructor(public servico : DadosService, public rota : Router, public alert : AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.dadosTela = this.servico.listarDados();
  }

  public visualizarDadosObj(obj : DadosFormulario){
    this.posicao = this.servico.encontrarPosicaoObj(obj);
    this.rota.navigate(['visualizar-dados-obj/'+this.posicao])
  }

  async alertExcluir(obj : DadosFormulario){
    this.indexObj = this.servico.encontrarPosicaoObj(obj);

    const alert = await this.alert.create({
      header: 'Excluir Item!',
      message: 'Deseja excluir o item?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Excluir',
          handler: async () => {
            this.servico.deletarItem(this.indexObj);
          }
        }
      ]
    });
    await alert.present();
  }

  editarItem(obj : DadosFormulario){
    this.indexObj = this.servico.encontrarPosicaoObj(obj);
    this.rota.navigate(['editar-obj/'+this.indexObj])
  }

}
