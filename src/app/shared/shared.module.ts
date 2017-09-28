import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstruturaAplicacaoService } from './estrutura-aplicacao.service';
import { GeracaoScriptService } from './geracao-script.service';
import { ListaModule } from './lista/lista.module';

@NgModule({
  imports: [
    ListaModule
  ],
  exports: [ListaModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [EstruturaAplicacaoService, GeracaoScriptService]
    };
  }
}
