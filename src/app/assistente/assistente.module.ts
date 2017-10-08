import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { AssistenteRoutingModule } from './assistente-routing.module';
import { AssistDominioLogicoComponent } from './assist-dominio-logico/assist-dominio-logico.component';
import { AssistFuncionalidadesComponent } from './assist-funcionalidades/assist-funcionalidades.component';
import { AssistRotaComponent } from './assist-rota/assist-rota.component';
import { AssistenteCriacaoComponent } from './assistente-criacao/assistente-criacao.component';
import { BadgeComponent } from './shared/badge/badge.component';
import { GeracaoScriptComponent } from './geracao-script/geracao-script.component';
import { AssistInfoAplicacaoComponent } from './assist-info-aplicacao/assist-info-aplicacao.component';

@NgModule({
  imports: [
    CommonModule,
    AssistenteRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [AssistDominioLogicoComponent, AssistFuncionalidadesComponent,
    AssistRotaComponent,
    AssistenteCriacaoComponent,
    BadgeComponent,
    GeracaoScriptComponent,
    AssistInfoAplicacaoComponent]
})
export class AssistenteModule { }
