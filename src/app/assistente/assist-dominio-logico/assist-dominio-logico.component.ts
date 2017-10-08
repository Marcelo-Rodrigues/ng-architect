import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { DominioLogico } from '../../shared/dominio-logico';

@Component({
  selector: 'my-assist-dominio-logico',
  templateUrl: './assist-dominio-logico.component.html',
  styleUrls: ['./assist-dominio-logico.component.css']
})
export class AssistDominioLogicoComponent {

  dominiosLogicos: DominioLogico[];
  dominioLogicoEdicao: DominioLogico;

  constructor(private estruturaAplicacaoService: EstruturaAplicacaoService, private router: Router) {
    this.dominiosLogicos = estruturaAplicacaoService.dominiosLogicos;
  }

  adicionarDominio() {
    this.dominioLogicoEdicao = new DominioLogico('', '');
    this.estruturaAplicacaoService.adicionarDominioLogico(this.dominioLogicoEdicao);
  }

}
