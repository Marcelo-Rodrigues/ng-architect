import { Funcionalidade } from './funcionalidade';

export class DominioLogico {

    public funcionalidades: Funcionalidade[];
    public rota: string;

    constructor(
        public nome: string,
        public descricao?: string
    ) {
        this.funcionalidades = [];
        this.rota = '';
     }
}
