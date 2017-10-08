import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { rotasAssistente } from './assistente-criacao/assistente-criacao.component';

@NgModule({
  imports: [RouterModule.forChild(rotasAssistente)],
  exports: [RouterModule]
})
export class AssistenteRoutingModule { }
