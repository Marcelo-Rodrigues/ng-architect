
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EtapaAssistente, EtapasAssistente } from '../etapas-assistente';
import { Router, ActivatedRoute } from '@angular/router';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { AssistDominioLogicoComponent } from '../assist-dominio-logico/assist-dominio-logico.component';
import { AssistSubdominioComponent } from '../assist-subdominio/assist-subdominio.component';
import { AssistRotaComponent } from '../assist-rota/assist-rota.component';

import { RotaAssistente } from '../rota-assistente';

@Component({
  selector: 'my-assistente-criacao',
  templateUrl: './assistente-criacao.component.html',
  styleUrls: ['./assistente-criacao.component.css']
})
export class AssistenteCriacaoComponent implements OnInit {

  etapasAssistente: EtapasAssistente;
  etapaAssistente: EtapaAssistente;
  permitirAvanco = true;

  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,
    private estruturaAplicacaoService: EstruturaAplicacaoService) {
    this.etapasAssistente = new EtapasAssistente(rotasAssistente);
    this.atualizarEtapa();
  }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof ActivatedRoute)
      .subscribe(() => this.atualizarEtapa());
  }

  atualizarEtapa() {
    this.etapaAssistente = this.etapasAssistente.obterEtapaPorRota(this.router.url);
  }

  salvar() {
    this.estruturaAplicacaoService.salvar();
  }
}

// Definicao das etapas do assistente
export const rotasAssistente: RotaAssistente[] = [
  {
    path: '',
    redirectTo: 'dominio_logico'
  },
  {
    path: 'dominiologico',
    titulo: 'Definição de dominios lógicos',
    component: AssistenteCriacaoComponent,
    children: [{
      path: '', outlet: 'assistente',
      component: AssistDominioLogicoComponent
    }]
  },
  {
    path: 'funcionalidades',
    titulo: 'Definição de funcionalidades dos domínios lógicos',
    component: AssistenteCriacaoComponent,
    children: [{
      path: '', outlet: 'assistente',
      component: AssistSubdominioComponent
    }]
  },
  {
    path: 'rota',
    titulo: 'Definição de rotas',
    component: AssistenteCriacaoComponent,
    children: [{
      path: '', outlet: 'assistente',
      component: AssistRotaComponent
    }]
  }
];
