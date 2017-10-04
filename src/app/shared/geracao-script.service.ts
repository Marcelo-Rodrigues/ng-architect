import { Injectable } from '@angular/core';

import { EstruturaAplicacaoService } from './estrutura-aplicacao.service';
import { Funcionalidade } from './funcionalidade';

@Injectable()
export class GeracaoScriptService {

  private static TEMPLATE_NGG_MODULO = function (nome: string, descricao: string) { return `ng g m ${nome} --routing #${descricao}`; };
  private static TEMPLATE_NGG_CLASSE = function (nome: string, descricao: string) { return `ng g class ${nome} #${descricao}`; };
  private static TEMPLATE_NGG_COMPONENTE =
  function (modulo: string, nome: string, descricao: string) { return `ng g c ${modulo}/${nome} #${descricao}`; };
  private static TEMPLATE_NGG_SERVICO = function (nome: string, descricao: string) { return `ng g s ${nome} #${descricao}`; };

  constructor(private estruturaAplicacaoService: EstruturaAplicacaoService) { }

  public gerarScript(): string[] {
    const comandos: string[] = [];

    for (let i = 0, len = this.estruturaAplicacaoService.dominiosLogicos.length; i < len; i++) {
      const dominioLogico = this.estruturaAplicacaoService.dominiosLogicos[i];

      comandos.push(GeracaoScriptService.TEMPLATE_NGG_MODULO(dominioLogico.nome, dominioLogico.descricao));
      this.gerarComponentes(dominioLogico.nome, comandos, dominioLogico.funcionalidades);
    }
    return comandos;
  }

  private gerarComponentes(modulo: string, comandos: string[], funcionalidades: Funcionalidade[]) {

    for (let i = 0, len = funcionalidades.length; i < len; i++) {
      const funcionalidade = funcionalidades[i];

      comandos.push(GeracaoScriptService.TEMPLATE_NGG_COMPONENTE(modulo.toLowerCase(), funcionalidade.nome, funcionalidade.descricao));
    }
  }
}
