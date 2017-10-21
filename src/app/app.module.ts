
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EstruturaAplicacaoService } from './shared/estrutura-aplicacao.service';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CargaArquivoComponent } from './carga-arquivo/carga-arquivo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginaInicialComponent,
    CargaArquivoComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [EstruturaAplicacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
