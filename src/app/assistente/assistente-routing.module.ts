import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistDominioLogicoComponent } from './assist-dominio-logico/assist-dominio-logico.component';
import { AssistSubdominioComponent } from './assist-subdominio/assist-subdominio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'etapa1'
  },
  {
    path: 'etapa1',
    component: AssistDominioLogicoComponent
  },
  {
    path: 'etapa2',
    component: AssistSubdominioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistenteRoutingModule { }
