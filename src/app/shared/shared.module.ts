import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstruturaAplicacaoService } from './estrutura-aplicacao.service';
import { GeracaoScriptService } from './geracao-script.service';
import { ListaModule } from './lista/lista.module';
import { ClickOutListenerDirective } from './diretivas/click-out-listener.directive';
import { FocusDirective } from './diretivas/focus.directive';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';


@NgModule({
  imports: [
    ListaModule,
    CommonModule
  ],
  exports: [ ListaModule, ClickOutListenerDirective, FocusDirective, VisualizacaoComponent, CommonModule ],
  declarations: [ ClickOutListenerDirective, FocusDirective, VisualizacaoComponent ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [EstruturaAplicacaoService, GeracaoScriptService]
    };
  }
}
