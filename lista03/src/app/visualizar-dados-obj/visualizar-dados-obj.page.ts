import { Component, OnInit } from '@angular/core';
import { DadosFormulario } from '../models/dadosFormulario';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-visualizar-dados-obj',
  templateUrl: './visualizar-dados-obj.page.html',
  styleUrls: ['./visualizar-dados-obj.page.scss'],
})
export class VisualizarDadosObjPage implements OnInit {

  posicao : number = 0;
  objRetornado : DadosFormulario;
  interessesString: string;


  constructor(public parametroRota : ActivatedRoute, public servico : DadosService) { }

  ngOnInit() {

    this.parametroRota.params.subscribe (
      (data : any) => {
        this.posicao = data.posicao;
        this.objRetornado = this.servico.retornarObjViaPosicao(this.posicao)
        this.interessesString = this.objRetornado.interesses.join('\n');
      }
    )

  }

}
