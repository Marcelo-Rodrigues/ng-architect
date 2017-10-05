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

  private static TEMPLATE_ROTA_LAZY = function (path: string, nome: string) {
    return `{
      path: '${path}',
      loadChildren: './${nome.toLowerCase()}/${nome.toLowerCase()}.module#${nome}Module'
    }`;
  };

  private static TEMPLATE_IMPORT = function (nome: string) {
    return `
    import { ${nome}Component } from './${nome.toLowerCase()}/${nome.toLowerCase()}.component';
    `;
  };

  private static TEMPLATE_ROTA = function (path: string, nome: string) {
    return `{
      path: '${path}',
      component: ${nome}Component
    }`;
  };

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

      comandos.push(GeracaoScriptService.TEMPLATE_NGG_COMPONENTE(modulo, funcionalidade.nome, funcionalidade.descricao));
    }
  }

  public gerarRotas(): string[] {
    const rotas: string[] = [];

    for (let i = 0, len = this.estruturaAplicacaoService.dominiosLogicos.length; i < len; i++) {
      const dominioLogico = this.estruturaAplicacaoService.dominiosLogicos[i];

      rotas.push(GeracaoScriptService.TEMPLATE_ROTA_LAZY(dominioLogico.rota, dominioLogico.nome));
      // this.gerarSubRotas(dominioLogico.nome, rotas, dominioLogico.funcionalidades);
    }
    return rotas;
  }

  public gerarSubRotas(): any[] {

    const rotas: any[] = [];

    for (let iRotas = 0, lenRotas = this.estruturaAplicacaoService.dominiosLogicos.length; iRotas < lenRotas; iRotas++) {
      const dominioLogico = this.estruturaAplicacaoService.dominiosLogicos[iRotas];

      const subRotas: string[] = [];
      const imports: string[] = [];

      for (let iSubRotas = 0, lenSubRotas = dominioLogico.funcionalidades.length; iSubRotas < lenSubRotas; iSubRotas++) {
        const funcionalidade = dominioLogico.funcionalidades[iSubRotas];

        imports.push(GeracaoScriptService.TEMPLATE_IMPORT(funcionalidade.nome));
        subRotas.push(GeracaoScriptService.TEMPLATE_ROTA(funcionalidade.rota, funcionalidade.nome));
      }

      rotas.push({
        nome: dominioLogico.nome,
        arquivo: `${dominioLogico.nome.toLowerCase()}/${dominioLogico.nome.toLowerCase()}-routing.module.ts`,
        imports: imports,
        subRotas: subRotas
      });
    }
    return rotas;
  }
}
