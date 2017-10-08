

import { Route, Routes } from '@angular/router';
import { RotaAssistente } from './rota-assistente';

export class EtapaAssistente {
    public etapaAnterior?: EtapaAssistente = null;
    public proximaEtapa?: EtapaAssistente = null;
    public numeroEtapa?= 0;

    public titulo?: string;

    constructor(public rota: RotaAssistente) {
        this.titulo = rota.titulo;
     }
}

export class EtapasAssistente {
    listaEtapasAssistente: EtapaAssistente[] = [];

    constructor(rotasAssistente) {
        this.criarEtapas(rotasAssistente);
        this.preencherReferencias();
    }

    private criarEtapas(rotas: RotaAssistente[]) {
        for (let indiceRota = 0; indiceRota < rotas.length; indiceRota++) {
            const rota = rotas[indiceRota];

            if (rota.component) {
                this.listaEtapasAssistente.push(new EtapaAssistente(rota));
            }
        }
    }

    private preencherReferencias() {
        for (let indiceEtapa = 0; indiceEtapa < this.listaEtapasAssistente.length; indiceEtapa++) {
            const etapa = this.listaEtapasAssistente[indiceEtapa];

            etapa.numeroEtapa = indiceEtapa + 1;

            if (indiceEtapa > 0) {
                etapa.etapaAnterior = this.listaEtapasAssistente[indiceEtapa - 1];
            }

            if (indiceEtapa < this.listaEtapasAssistente.length) {
                etapa.proximaEtapa = this.listaEtapasAssistente[indiceEtapa + 1];
            }
        }
    }

    obterEtapaPorRota(rota: string): EtapaAssistente {
        return this.listaEtapasAssistente.find(etapa => rota.endsWith(etapa.rota.path));
    }

    obterEtapaPorComponente(componente): EtapaAssistente {
        return this.listaEtapasAssistente.find(etapa => componente instanceof etapa.rota.component);
    }

}
