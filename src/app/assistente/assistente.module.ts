import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistenteRoutingModule } from './assistente-routing.module';
import { AssistDominioLogicoComponent } from './assist-dominio-logico/assist-dominio-logico.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AssistenteRoutingModule,
    FormsModule
  ],
  declarations: [AssistDominioLogicoComponent]
})
export class AssistenteModule { }
