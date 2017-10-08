import { Component, OnInit } from '@angular/core';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { DominioLogico } from '../../shared/dominio-logico';

@Component({
  selector: 'my-assist-rota',
  templateUrl: './assist-rota.component.html',
  styleUrls: ['./assist-rota.component.css']
})
export class AssistRotaComponent implements OnInit {

  dominiosLogicos: DominioLogico[];

  constructor(private estruturaAplicacaoService: EstruturaAplicacaoService) {
    // if (!this.estruturaAplicacaoService.possuiDominioLogico()) {
    //   this.passoAnterior();
    // }
    this.dominiosLogicos = estruturaAplicacaoService.dominiosLogicos;
  }

  ngOnInit() {
  }
}
