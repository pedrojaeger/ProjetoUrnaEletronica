import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  contaBolsonaro: number = 17;
  contaLula: number = 13;
  contaBranco: number = 12;
  votoBolsonaro: boolean = false;
  votoNaoExiste: boolean = false;
  votosBolsonaro: any[] = [];
  votosSomaLula: number = 0;
  votosSomaBolsonaro: number = 0;
  votosSomaBranco: number = 0;

  percentualLula!: number;
  percentualBolsonaro!: number;
  percentualBranco!: number;

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
    this.maisDigitos = false;
  }

  branco() {
    if (this.maisDigitos === true) {
      return;
    } else if (this.votoNaoExiste === true) {
      return;
    }

    this.votoBranco = true;
    this.maisDigitos = false;
    this.numNaTela = '';
    this.votos.push(this.contaBranco);
    this.finaliza = true;
  }

  resultado() {
    const somaLula = this.votos.filter((item) => {
      return item == 13;
    });
    const somaBolsonaro = this.votos.filter((item) => {
      return item == 17;
    });
    const somaBranco = this.votos.filter((item) => {
      return item == 12;
    });

    this.votosSomaLula = somaLula.length;
    this.votosSomaBolsonaro = somaBolsonaro.length;
    this.votosSomaBranco = somaBranco.length;

    this.percentualLula = this.votosSomaLula / this.votos.length;
    this.percentualBolsonaro = this.votosSomaBolsonaro / this.votos.length;
    this.percentualBranco = this.votosSomaBranco / this.votos.length;
  }
}
