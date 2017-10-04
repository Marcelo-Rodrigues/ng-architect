export class EtapaAssistente {
    public etapaAnterior?: EtapaAssistente = null;
    public proximaEtapa?: EtapaAssistente = null;
    constructor(public titulo: string, public componente: any) { }
}
