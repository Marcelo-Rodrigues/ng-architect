import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { DominioLogico } from '../../shared/dominio-logico';
import { Funcionalidade } from '../../shared/funcionalidade';
import { GeracaoScriptService } from '../../shared/geracao-script.service';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';

@Component({
  selector: 'my-geracao-script',
  templateUrl: './geracao-script.component.html',
  styleUrls: ['./geracao-script.component.css']
})
export class GeracaoScriptComponent implements OnInit {

  jsonUrl: any;
  comandos: string[] = [];
  rotas: string[] = [];
  subRotas: any[] = [];

  constructor(public estruturaAplicacaoService: EstruturaAplicacaoService, private router: Router,
    private sanitizer: DomSanitizer, private geracaoScriptService: GeracaoScriptService) { }

  ngOnInit() {
    this.gerarScripts();
  }

  generateDownloadJsonUri() {
    const theJSON = JSON.stringify(this.estruturaAplicacaoService.configAplicacao);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.jsonUrl = uri;
  }

  gerarScripts() {
    this.estruturaAplicacaoService.salvarEmCache();
    this.comandos = this.geracaoScriptService.gerarScript();
    this.rotas = this.geracaoScriptService.gerarRotas();
    this.subRotas = this.geracaoScriptService.gerarSubRotas();
    this.generateDownloadJsonUri();
  }

}
