import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AssistenteRoutingModule } from './assistente-routing.module';
import { AssistDominioLogicoComponent } from './assist-dominio-logico/assist-dominio-logico.component';
import { AssistSubdominioComponent } from './assist-subdominio/assist-subdominio.component';
import { ListaComponent } from '../shared/lista/lista.component';
import { AssistRotaComponent } from './assist-rota/assist-rota.component';

@NgModule({
  imports: [
    CommonModule,
    AssistenteRoutingModule,
    FormsModule
  ],
  declarations: [AssistDominioLogicoComponent, AssistSubdominioComponent,
    ListaComponent,
    AssistRotaComponent]
})
export class AssistenteModule { }
