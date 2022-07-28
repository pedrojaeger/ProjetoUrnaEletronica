import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent implements OnInit {
  @Input() recebeVotos: any[] = [];

  votosSomaLula: number = 0;
  votosSomaBolsonaro: number = 0;
  votosSomaBranco: number = 0;

  percentualLula!: number;
  percentualBolsonaro!: number;
  percentualBranco!: number;

  constructor() {}

  ngOnInit(): void {}

  resultado() {
    console.log('é os gu pai');
    console.log(this.recebeVotos);

    const somaLula = this.recebeVotos.filter((item) => {
      return item == 13;
    });
    const somaBolsonaro = this.recebeVotos.filter((item) => {
      return item == 17;
    });
    const somaBranco = this.recebeVotos.filter((item) => {
      return item == 12;
    });

    this.votosSomaLula = somaLula.length;
    this.votosSomaBolsonaro = somaBolsonaro.length;
    this.votosSomaBranco = somaBranco.length;

    this.percentualLula = this.votosSomaLula / this.recebeVotos.length;
    this.percentualBolsonaro =
      this.votosSomaBolsonaro / this.recebeVotos.length;
    this.percentualBranco = this.votosSomaBranco / this.recebeVotos.length;
  }
}
