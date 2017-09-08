import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { DominioLogico } from '../../shared/dominio-logico';
import { Funcionalidade } from '../../shared/funcionalidade';

@Component({
  selector: 'my-assist-subdominio',
  templateUrl: './assist-subdominio.component.html',
  styleUrls: ['./assist-subdominio.component.css']
})
export class AssistSubdominioComponent implements OnInit {

  dominio: DominioLogico;
  model: Funcionalidade;

  constructor(private estruturaAplicacaoService: EstruturaAplicacaoService, private router: Router) {
    if (!this.estruturaAplicacaoService.dominiosLogicos.length) {
      this.passoAnterior();
    }

    this.dominio = this.estruturaAplicacaoService.dominiosLogicos[0];
    this.novaFuncionalidade();
  }

  ngOnInit() {
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
    this.router.navigate(['assistente', 'etapa1']);
  }

}
