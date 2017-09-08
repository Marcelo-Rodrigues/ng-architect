import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { DominioLogico } from '../../shared/dominio-logico';
import { Funcionalidade } from '../../shared/funcionalidade';

@Component({
  selector: 'my-assist-rota',
  templateUrl: './assist-rota.component.html',
  styleUrls: ['./assist-rota.component.css']
})
export class AssistRotaComponent implements OnInit {
  jsonUrl: any;

  constructor(private estruturaAplicacaoService: EstruturaAplicacaoService, private router: Router, private sanitizer: DomSanitizer) {
    if (!this.estruturaAplicacaoService.possuiDominioLogico()) {
      this.passoAnterior();
    }
  }

  ngOnInit() {
  }

  passoAnterior() {
    // TODO: salvar dominios logicos
    this.router.navigate(['assistente', 'etapa2-subdominio']);
  }

  proximoPasso() {
    // TODO: salvar dominios logicos
    // this.router.navigate(['assistente', '']);
    this.generateDownloadJsonUri();
  }

  generateDownloadJsonUri() {
    const theJSON = JSON.stringify(this.estruturaAplicacaoService);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.jsonUrl = uri;
  }
}
