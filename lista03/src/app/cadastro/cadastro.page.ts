import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DadosFormulario } from '../models/dadosFormulario';
import { Router } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  dadosForm: DadosFormulario = {
    nome: '',
    idade: '',
    genero: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    interesses: [] as string[],
    newsletter: false,
  };

  newESPORTE: boolean = false;
  newMUSICA: boolean = false;
  newLEITURA: boolean = false;
  newVIAGENS: boolean = false;


  constructor(public rota : Router, public servico : DadosService) { }

  ngOnInit() {
  }

  salvar(form: NgForm){
    if(form.valid){

      if(this.newESPORTE){
        this.dadosForm.interesses[0] = 'Esporte';
      }
      if(this.newMUSICA){
        this.dadosForm.interesses[1] = 'Musica';
      }
      if(this.newLEITURA){
        this.dadosForm.interesses[2] = 'Leitura';
      }
      if(this.newVIAGENS){
        this.dadosForm.interesses[3] = 'Viagens';
      }

      if(this.dadosForm.newsletter === undefined || this.dadosForm.newsletter === null){
        this.dadosForm.newsletter = false;
      }

      console.log("Dados Preenchidos: " + JSON.stringify(this.dadosForm))

      this.servico.adicionarDados(this.dadosForm);

      this.resetFormulario();
      this.rota.navigate(['/home'])
    }
  }

  resetFormulario(){
    this.dadosForm.nome = '';
    this.dadosForm.idade = '';
    this.dadosForm.genero = '';
    this.dadosForm.email = '';
    this.dadosForm.telefone = '';
    this.dadosForm.endereco = '';
    this.dadosForm.cidade = '';
    this.dadosForm.interesses = [];
    this.dadosForm.newsletter = false;
  }

  atualizarCheckbox1(){
    this.newESPORTE = !this.newESPORTE;
  }
  atualizarCheckbox2(){
    this.newMUSICA = !this.newMUSICA;
  }
  atualizarCheckbox3(){
    this.newLEITURA = !this.newLEITURA;
  }
  atualizarCheckbox4(){
    this.newVIAGENS = !this.newVIAGENS;
  }
}
