import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { DominioLogico } from '../../shared/dominio-logico';

@Component({
  selector: 'my-assist-dominio-logico',
  templateUrl: './assist-dominio-logico.component.html',
  styleUrls: ['./assist-dominio-logico.component.css']
})
export class AssistDominioLogicoComponent implements OnInit {

  model: DominioLogico;

  constructor(public estruturaAplicacaoService: EstruturaAplicacaoService, private router: Router) {
    this.novoDominio();
  }

  ngOnInit() {
  }

  adicionar() {
    this.estruturaAplicacaoService.adicionarDominioLogico(this.model);
    this.novoDominio();
  }

  novoDominio() {
    this.model = new DominioLogico('', '');
  }
}
