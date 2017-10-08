import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { DominioLogico } from '../../shared/dominio-logico';
import { Funcionalidade } from '../../shared/funcionalidade';

@Component({
  selector: 'my-assist-subdominio',
  templateUrl: './assist-subdominio.component.html',
  styleUrls: ['./assist-subdominio.component.css']
})
export class AssistSubdominioComponent implements AfterViewInit {

  dominio: DominioLogico;
  model: Funcionalidade;

  constructor(public estruturaAplicacaoService: EstruturaAplicacaoService, private router: Router) {
    // if (!this.estruturaAplicacaoService.possuiDominioLogico()) {
    //   this.passoAnterior();
    // }

    this.dominio = this.estruturaAplicacaoService.dominiosLogicos[0];
    this.novaFuncionalidade();
  }

  ngAfterViewInit() {
    this.estruturaAplicacaoService.salvar();
  }

  novaFuncionalidade() {
    this.model = new Funcionalidade('', '');
  }

  adicionar() {
    this.dominio.funcionalidades.push(this.model);
    this.novaFuncionalidade();
  }

}
