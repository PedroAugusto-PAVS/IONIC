import { Component, OnInit } from '@angular/core';
import { DadosFormulario } from '../models/dadosFormulario';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../services/dados.service';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-obj',
  templateUrl: './editar-obj.page.html',
  styleUrls: ['./editar-obj.page.scss'],
})
export class EditarObjPage implements OnInit {

  obj : DadosFormulario;
  indice : number;

  newESPORTE: boolean;
  newMUSICA: boolean;
  newLEITURA: boolean;
  newVIAGENS: boolean;

  constructor(public param : ActivatedRoute, public servico : DadosService, public rota : Router, public toast : ToastController) { }

  ngOnInit() {

    this.param.params.subscribe(

      (data : any) => {
        this.indice = data.item;
        this.obj = this.servico.retornarObjViaPosicao(this.indice);
        console.log("Dados: "+JSON.stringify(this.obj))
        this.inicializarOpcoesCheckbox();
      }

    )

  }

  salvar(form: NgForm){
    if(form.valid){

      this.obj.interesses = [];

      if(this.newESPORTE){
        this.obj.interesses[0] = 'Esporte';
      }
      if(this.newMUSICA){
        this.obj.interesses[1] = 'Musica';
      }
      if(this.newLEITURA){
        this.obj.interesses[2] = 'Leitura';
      }
      if(this.newVIAGENS){
        this.obj.interesses[3] = 'Viagens';
      }

      console.log("Vetor interesses: " + JSON.stringify(this.obj.interesses))

      this.servico.editarItem(this.obj);
      this.rota.navigate(['listar-dados']);
      this.mensagem('Obj editado com sucesso!', 3000, 'success');

    }
  }

  async mensagem(msg : any, duration : any, color : any){
    const toast = await this.toast.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }

  inicializarOpcoesCheckbox(){

    if(this.obj.interesses[0])
      this.newESPORTE = true
    else
      this.newESPORTE = false

    if(this.obj.interesses[1])
      this.newMUSICA = true
    else
      this.newMUSICA = false
  
    if(this.obj.interesses[2])
      this.newLEITURA = true
    else
      this.newLEITURA = false

    if(this.obj.interesses[3])
      this.newVIAGENS = true
    else
      this.newVIAGENS = false
  }

  atualizarCheckbox1(){
    this.newESPORTE = !this.newESPORTE;
    console.log("Valor esporte: "+this.newESPORTE)
  }
  atualizarCheckbox2(){
    this.newMUSICA = !this.newMUSICA;
    console.log("Valor música: "+this.newMUSICA)
  }
  atualizarCheckbox3(){
    this.newLEITURA = !this.newLEITURA;
    console.log("Valor leitura: "+this.newLEITURA)
  }
  atualizarCheckbox4(){
    this.newVIAGENS = !this.newVIAGENS;
    console.log("Valor viagens: "+this.newVIAGENS)
  }

}
