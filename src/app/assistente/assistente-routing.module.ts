import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistDominioLogicoComponent } from './assist-dominio-logico/assist-dominio-logico.component';
import { AssistSubdominioComponent } from './assist-subdominio/assist-subdominio.component';
import { AssistRotaComponent } from './assist-rota/assist-rota.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'etapa1-dominio_logico'
  },
  {
    path: 'etapa1-dominio_logico',
    component: AssistDominioLogicoComponent
  },
  {
    path: 'etapa2-subdominio',
    component: AssistSubdominioComponent
  },
  {
    path: 'etapa3-rota',
    component: AssistRotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistenteRoutingModule { }
