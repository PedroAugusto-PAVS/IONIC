import { Injectable } from '@angular/core';
import { DadosFormulario } from '../models/dadosFormulario';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados_cadastrados : DadosFormulario[] = [];
  indice : number;

  constructor() { }

  public adicionarDados(dados : DadosFormulario){

    this.dados_cadastrados.push({...dados});
    console.log("Dados serviço: "+JSON.stringify(this.dados_cadastrados));

  }

  public listarDados(){
    console.log("Listar dados: "+JSON.stringify(this.dados_cadastrados))
    return this.dados_cadastrados;
  }

  public encontrarPosicaoObj(objProcurado : DadosFormulario) : number {
    const posicao = this.dados_cadastrados.findIndex(obj => JSON.stringify(obj) === JSON.stringify(objProcurado));
    return posicao;
  }
  
  public retornarObjViaPosicao(posicao : number){
    return this.dados_cadastrados[posicao];
  }

  public deletarItem(index : number){
    this.dados_cadastrados.splice(index, 1);
  }

  public editarItem(obj : DadosFormulario){
    this.indice = this.encontrarPosicaoObj(obj);
    this.dados_cadastrados.splice(this.indice, 1, obj);
  }


}
