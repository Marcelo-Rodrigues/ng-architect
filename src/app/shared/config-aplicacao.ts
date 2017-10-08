import { DominioLogico } from './dominio-logico';

export class ConfigAplicacao {
    public nomeAplicacao: string;
    public dominiosLogicos: DominioLogico[];

    constructor() {
        this.dominiosLogicos = [];
    }
}
