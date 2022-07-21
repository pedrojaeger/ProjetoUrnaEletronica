import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss'],
})
export class UrnaComponent implements OnInit {
  numNaTela = '';
  maisDigitos: boolean = false;
  votoBranco: boolean = false;
  votoLula: boolean = false;
  contaBolsonaro: any[] = ['bolsonaro', 1];
  contaLula: any[] = ['lula', 1];
  contaBranco: any[] = ['branco', 1];
  votoBolsonaro: boolean = false;
  votoNaoExiste: boolean = false;
  votosBolsonaro: any[] = [];

  finaliza: boolean = false;

  votos: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  addNumero(value: string) {
    if (this.numNaTela.length < 2) {
      if (this.votoBranco === true) {
        return;
      }

      this.numNaTela = this.numNaTela + value;
    } else {
      if (this.votoBolsonaro === true) {
        return;
      } else if (this.votoLula === true) {
        return;
      }
      this.maisDigitos = true;
    }
  }

  confirma() {
    if (this.numNaTela === '17') {
      this.votoBolsonaro = true;
      this.votos.push(this.contaBolsonaro);
      this.finaliza = true;
    }
    if (this.numNaTela === '13') {
      this.votoLula = true;
      this.votos.push(this.contaLula);
      this.finaliza = true;
    }
    if (this.numNaTela !== '17' && this.numNaTela !== '13') {
      this.votoNaoExiste = true;
    }

    console.log(this.votos);
  }

  corrige() {
    this.numNaTela = '';
    this.maisDigitos = false;
    this.votoBranco = false;
    this.votoBolsonaro = false;
    this.votoLula = false;
    this.votoNaoExiste = false;
    this.finaliza = false;
  }

  branco() {
    this.votoBranco = true;
    this.maisDigitos = false;
    this.numNaTela = '';
    this.votos.push(this.contaBranco);
    this.finaliza = true;
  }
}
