import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { DominioLogico } from '../../shared/dominio-logico';
import { Funcionalidade } from '../../shared/funcionalidade';

@Component({
  selector: 'my-assist-funcionalidades',
  templateUrl: './assist-funcionalidades.component.html',
  styleUrls: ['./assist-funcionalidades.component.css']
})
export class AssistFuncionalidadesComponent implements AfterViewInit {
  dominiosLogicos: DominioLogico[];
  dominioEdicao: DominioLogico;
  funcionalidadeEdicao: Funcionalidade;

  constructor(private estruturaAplicacaoService: EstruturaAplicacaoService, private router: Router) {
    this.dominiosLogicos = estruturaAplicacaoService.dominiosLogicos;
    this.dominioEdicao = this.dominiosLogicos[0];
  }

  ngAfterViewInit() {
    this.estruturaAplicacaoService.salvar();
  }

  adicionarFuncionalidade() {
    this.funcionalidadeEdicao = new Funcionalidade('', '');
    this.dominioEdicao.funcionalidades.push(this.funcionalidadeEdicao);
  }

}
