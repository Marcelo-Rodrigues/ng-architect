import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstruturaAplicacaoService } from './estrutura-aplicacao.service';
import { GeracaoScriptService } from './geracao-script.service';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaComponent],
  exports: [ListaComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [EstruturaAplicacaoService, GeracaoScriptService]
    };
  }
}
