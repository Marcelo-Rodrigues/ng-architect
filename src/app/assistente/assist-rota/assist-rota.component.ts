import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { GeracaoScriptService } from '../../shared/geracao-script.service';
import { DominioLogico } from '../../shared/dominio-logico';
import { Funcionalidade } from '../../shared/funcionalidade';

@Component({
  selector: 'my-assist-rota',
  templateUrl: './assist-rota.component.html',
  styleUrls: ['./assist-rota.component.css']
})
export class AssistRotaComponent implements OnInit {
  jsonUrl: any;
  comandos: string[] = [];
  rotas: string[] = [];
  subRotas: any[] = [];

  constructor(public estruturaAplicacaoService: EstruturaAplicacaoService, private router: Router,
     private sanitizer: DomSanitizer, private geracaoScriptService: GeracaoScriptService) {
    // if (!this.estruturaAplicacaoService.possuiDominioLogico()) {
    //   this.passoAnterior();
    // }
  }

  ngOnInit() {
  }


  proximoPasso() {
    // TODO: salvar dominios logicos
    // this.router.navigate(['assistente', '']);
    this.estruturaAplicacaoService.salvar();
    this.comandos = this.geracaoScriptService.gerarScript();
    this.rotas = this.geracaoScriptService.gerarRotas();
    this.subRotas = this.geracaoScriptService.gerarSubRotas();
    this.generateDownloadJsonUri();
  }

  generateDownloadJsonUri() {
    const theJSON = JSON.stringify(this.estruturaAplicacaoService.dominiosLogicos);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.jsonUrl = uri;
  }
}
