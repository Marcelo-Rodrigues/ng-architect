import { Injectable } from '@angular/core';
import { DominioLogico } from './dominio-logico';

@Injectable()
export class EstruturaAplicacaoService {

  public dominiosLogicos: DominioLogico[] = [];
  constructor() {
    this.carregar();
  }

  adicionarDominioLogico(dominioLogico: DominioLogico) {
    this.dominiosLogicos.push(dominioLogico);
  }

  possuiDominioLogico() {
    return this.dominiosLogicos.length;
  }

  public salvar() {
    localStorage.setItem('dominiosLogicos', JSON.stringify(this.dominiosLogicos));
  }

  public carregar() {
    const estruturaSalva = localStorage.getItem('dominiosLogicos');
    if (estruturaSalva) {
      this.dominiosLogicos = JSON.parse(estruturaSalva);
    }
  }
}
