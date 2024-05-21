import Processo from "../abstracoes/processo";
import ImpressorDocumento from "../impressores/impressorDocumento";
import Documento from "../modelos/documento";
import AtualizarDocumento from "./atualizarDocumento";

export default class AtualizarDocumentosCliente extends Processo {
    private documentos: Documento[]
    constructor(documentos: Documento[]) {
        super()
        this.documentos = documentos
    }
    processar(): void {
        this.documentos.forEach(doc => {
            let impressor = new ImpressorDocumento(doc)
            console.log("Documento atual :")
            console.log(impressor.imprimir())
            new AtualizarDocumento(doc)            
        })
    }
}