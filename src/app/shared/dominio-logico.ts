import { Funcionalidade } from './funcionalidade';

export class DominioLogico {

    private _funcionalidades: Funcionalidade[];

    constructor(
        public nome: string,
        public descricao?: string
    ) {
        this._funcionalidades = [];
     }

     get funcionalidades() {
         return this._funcionalidades;
     }
}
