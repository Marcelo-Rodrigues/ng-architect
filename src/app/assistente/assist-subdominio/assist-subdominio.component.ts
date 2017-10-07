import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { DominioLogico } from '../../shared/dominio-logico';
import { Funcionalidade } from '../../shared/funcionalidade';

import $ from 'jquery';

@Component({
  selector: 'my-assist-subdominio',
  templateUrl: './assist-subdominio.component.html',
  styleUrls: ['./assist-subdominio.component.css']
})
export class AssistSubdominioComponent implements AfterViewInit {

  dominio: DominioLogico;
  model: Funcionalidade;
  @ViewChild('carouselDominios') carouselDominios: ElementRef;

  constructor(public estruturaAplicacaoService: EstruturaAplicacaoService, private router: Router) {
    if (!this.estruturaAplicacaoService.possuiDominioLogico()) {
      this.passoAnterior();
    }

    this.dominio = this.estruturaAplicacaoService.dominiosLogicos[0];
    this.novaFuncionalidade();
  }

  ngAfterViewInit() {
  }

  novaFuncionalidade() {
    this.model = new Funcionalidade('', '');
  }

  adicionar() {
    this.dominio.funcionalidades.push(this.model);
    this.novaFuncionalidade();
  }

  passoAnterior() {
    // TODO: salvar dominios logicos
    this.router.navigate(['assistente', 'etapa1-dominio_logico']);
  }

  proximoPasso() {
    // TODO: salvar dominios logicos
    this.estruturaAplicacaoService.salvar();
    this.router.navigate(['assistente', 'etapa3-rota']);
  }

}
