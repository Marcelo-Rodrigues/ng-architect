import { Injectable } from '@angular/core';
import { DominioLogico } from './dominio-logico';

@Injectable()
export class EstruturaAplicacaoService {

  public dominiosLogicos = [];
  constructor() { }

  adicionarDominioLogico(dominioLogico: DominioLogico) {
    this.dominiosLogicos.push(dominioLogico);
  }

  possuiDominioLogico() {
    return this.dominiosLogicos.length;
  }
}
