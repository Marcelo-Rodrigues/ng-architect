import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistDominioLogicoComponent } from './assist-dominio-logico/assist-dominio-logico.component';

const routes: Routes = [
  {
    path: '',
    component: AssistDominioLogicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistenteRoutingModule { }
