import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { DominioLogico } from './dominio-logico';

@Injectable()
export class EstruturaAplicacaoService {

  public dominiosLogicos: DominioLogico[] = [];
  public dominioModificado: Boolean;

  constructor() {
    this.carregar();
  }

  adicionarDominioLogico(dominioLogico: DominioLogico) {
    this.dominiosLogicos.push(dominioLogico);
    this.dominioModificado = true;
  }

  possuiDominioLogico() {
    return this.dominiosLogicos.length;
  }

  public salvar() {
    localStorage.setItem('dominiosLogicos', JSON.stringify(this.dominiosLogicos));
    this.dominioModificado = false;
  }

  public carregar() {
    const estruturaSalva = localStorage.getItem('dominiosLogicos');
    if (estruturaSalva) {
      this.dominiosLogicos = JSON.parse(estruturaSalva);
    }
    this.dominioModificado = false;
  }
}
