import { Component, OnInit } from '@angular/core';
import { ConfigAplicacao } from '../../shared/config-aplicacao';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';

@Component({
  selector: 'my-assist-info-aplicacao',
  templateUrl: './assist-info-aplicacao.component.html',
  styleUrls: ['./assist-info-aplicacao.component.css']
})
export class AssistInfoAplicacaoComponent implements OnInit {

  configAplicacao: ConfigAplicacao;

  constructor(private estruturaAplicacaoService: EstruturaAplicacaoService) {
    this.configAplicacao = estruturaAplicacaoService.configAplicacao;
  }

  ngOnInit() {
  }

}
