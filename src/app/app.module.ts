
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EstruturaAplicacaoService } from './shared/estrutura-aplicacao.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginaInicialComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [EstruturaAplicacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
