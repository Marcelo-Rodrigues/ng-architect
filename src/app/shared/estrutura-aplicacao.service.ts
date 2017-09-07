import { Injectable } from '@angular/core';

@Injectable()
export class EstruturaAplicacaoService {

  _dominiosLogicos = [];
  constructor() { }

  adicionarDominioLogico(dominioLogico: string) {
    this.dominiosLogicos.push(dominioLogico);
  }

  get dominiosLogicos() {
    return this._dominiosLogicos;
  }

  set dominiosLogicos(value) {
    this._dominiosLogicos = value;
  }

}
