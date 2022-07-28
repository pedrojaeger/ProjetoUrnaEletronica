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
  votoBolsonaro: boolean = false;
  votoNaoExiste: boolean = false;
  votosBolsonaro: any[] = [];

  finaliza: boolean = false;

  votos: number[] = [];

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
      this.votos.push(17);
      this.finaliza = true;
    }
    if (this.numNaTela === '13') {
      this.votoLula = true;
      this.votos.push(13);
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
    this.votos.push(12);
    this.finaliza = true;
  }
}
