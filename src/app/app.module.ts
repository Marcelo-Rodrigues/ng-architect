import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EstruturaAplicacaoService } from './shared/estrutura-aplicacao.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EstruturaAplicacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
