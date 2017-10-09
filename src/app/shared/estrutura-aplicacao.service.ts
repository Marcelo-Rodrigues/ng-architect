import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { DominioLogico } from './dominio-logico';
import { ConfigAplicacao } from './config-aplicacao';

@Injectable()
export class EstruturaAplicacaoService {

  public configAplicacao: ConfigAplicacao;
  public dominioModificado: Boolean;

  public get dominiosLogicos() {
    return this.configAplicacao.dominiosLogicos;
  }

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

  public salvarEmCache(estrutura?) {
    const configuracao = estrutura ? estrutura : this.configAplicacao;
    localStorage.setItem('estrutura', JSON.stringify(configuracao));
    this.carregar();
    this.dominioModificado = false;
  }

  public retornarCache() {
    return localStorage.getItem('estrutura');
  }

  public carregar() {
    const estruturaSalva = this.retornarCache();
    if (estruturaSalva) {
      this.configAplicacao = JSON.parse(estruturaSalva);
      this.dominioModificado = false;
    } else {
      this.configAplicacao = new ConfigAplicacao();
    }
  }

}
