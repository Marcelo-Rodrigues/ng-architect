import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

export interface RotaMenu extends Route {
  descricaoMenu?: string;
}

export const routes: RotaMenu[] = [
  {
    path: '',
    component: PaginaInicialComponent
  },
  {
    path: 'assistente',
    loadChildren: './assistente/assistente.module#AssistenteModule',
    descricaoMenu: 'Assistente de criação'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
