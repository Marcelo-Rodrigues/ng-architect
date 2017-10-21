
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EtapaAssistente, EtapasAssistente } from '../etapas-assistente';
import { Router, ActivatedRoute } from '@angular/router';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { AssistDominioLogicoComponent } from '../assist-dominio-logico/assist-dominio-logico.component';
import { AssistFuncionalidadesComponent } from '../assist-funcionalidades/assist-funcionalidades.component';
import { AssistRotaComponent } from '../assist-rota/assist-rota.component';
import { GeracaoScriptComponent } from '../geracao-script/geracao-script.component';
import { AssistInfoAplicacaoComponent } from '../assist-info-aplicacao/assist-info-aplicacao.component';
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
      .subscribe(() => {
        this.atualizarEtapa();
        this.salvar();
      });
  }

  atualizarEtapa() {
    this.etapaAssistente = this.etapasAssistente.obterEtapaPorRota(this.router.url);
  }

  salvar() {
    this.estruturaAplicacaoService.salvarEmCache();
  }
}

// Definicao das etapas do assistente
export const rotasAssistente: RotaAssistente[] = [
  {
    path: '',
    redirectTo: 'infoaplicacao'
  },
  {
    path: 'infoaplicacao',
    titulo: 'Informações sobre a aplicação',
    component: AssistenteCriacaoComponent,
    children: [{
      path: '', outlet: 'assistente',
      component: AssistInfoAplicacaoComponent
    }]
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
      component: AssistFuncionalidadesComponent
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
  },
  {
    path: 'geracaoscripts',
    titulo: 'Geração de scripts',
    component: AssistenteCriacaoComponent,
    children: [{
      path: '', outlet: 'assistente',
      component: GeracaoScriptComponent
    }]
  }
];
