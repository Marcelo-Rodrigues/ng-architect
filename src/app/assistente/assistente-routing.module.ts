import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistDominioLogicoComponent } from './assist-dominio-logico/assist-dominio-logico.component';
import { AssistSubdominioComponent } from './assist-subdominio/assist-subdominio.component';
import { AssistRotaComponent } from './assist-rota/assist-rota.component';
import { EtapaAssistente } from './etapa-assistente';

export class EtapasAssistente {
  static DominioLogico = 'etapa1-dominio_logico';
  static SubDominio = 'etapa2-subdominio';
  static Rota = 'etapa3-rota';
}

const etapasAssistente: EtapaAssistente[] = [
  {
    titulo: 'dominio_logico',
    componente: AssistDominioLogicoComponent
  },
  {
    titulo: 'subdominio',
    componente: AssistSubdominioComponent
  },
  {
    titulo: 'rota',
    componente: AssistRotaComponent
  }
];

const routes: Routes = [];

if (etapasAssistente.length > 0) {

  routes.push({
    path: '',
    redirectTo: `etapa1-${etapasAssistente[0].titulo}`
  });

  for (let iEtapa = 0; iEtapa < etapasAssistente.length; iEtapa++) {
    routes.push({
      path: `etapa${iEtapa + 1}-${etapasAssistente[iEtapa].titulo}`,
      component: etapasAssistente[iEtapa].componente
    });
  }
}

// static DominioLogico = 'etapa1-dominio_logico';
// static SubDominio = 'etapa2-subdominio';
// static Rota = 'etapa3-rota';

//   {
//     path: '',
//     redirectTo: PathEtapas.DominioLogico
//   },
//   {
//     path: PathEtapas.DominioLogico,
//     component: AssistDominioLogicoComponent
//   },
//   {
//     path:  PathEtapas.SubDominio,
//     component: AssistSubdominioComponent
//   },
//   {
//     path: PathEtapas.Rota,
//     component: AssistRotaComponent
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistenteRoutingModule { }
