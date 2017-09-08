import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EstruturaAplicacaoService } from './shared/estrutura-aplicacao.service';
//import { ListaComponent } from './shared/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginaInicialComponent,
    //ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EstruturaAplicacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
