import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss']
})
export class UrnaComponent implements OnInit {


  numNaTela = ""
  maisDigitos: boolean = false;
  votoBranco: boolean = false;
  votoLula: boolean = false;
  votoBolsonaro: boolean = false;
  votoNaoExiste: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  addNumero(value: string) {

    if (this.numNaTela.length < 2) {

      if (this.votoBranco === true) {
        return;
      }
      this.numNaTela = this.numNaTela + value

    } else {
      this.maisDigitos = true
    }

    console.log(this.numNaTela.length )
  }

  confirma() {
    if (this.numNaTela === "17") {
      this.votoBolsonaro = true;
    }
    if (this.numNaTela === "13"){
      this.votoLula = true;
    }
    if (this.numNaTela !== "17" && this.numNaTela !== "13") {
      this.votoNaoExiste = true;
    }
  }

  corrige() {
    this.numNaTela = ""
    this.maisDigitos = false;
    this.votoBranco = false;
    this.votoBolsonaro = false;
    this.votoLula = false;
    this.votoNaoExiste = false;

  }

  branco() {
    this.votoBranco = true;
    this.maisDigitos = false;
    this.numNaTela = "";
  }





}
