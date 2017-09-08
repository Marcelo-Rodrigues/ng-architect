export class Funcionalidade {
    public rota: string;

    constructor(
        public nome: string,
        public descricao?: string
    ) {
        this.rota = '';
    }
}
