import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { AssistenteRoutingModule } from './assistente-routing.module';
import { AssistDominioLogicoComponent } from './assist-dominio-logico/assist-dominio-logico.component';
import { AssistSubdominioComponent } from './assist-subdominio/assist-subdominio.component';
import { AssistRotaComponent } from './assist-rota/assist-rota.component';
import { AssistenteCriacaoComponent } from './assistente-criacao/assistente-criacao.component';

@NgModule({
  imports: [
    CommonModule,
    AssistenteRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [AssistDominioLogicoComponent, AssistSubdominioComponent,
    AssistRotaComponent,
    AssistenteCriacaoComponent]
})
export class AssistenteModule { }
