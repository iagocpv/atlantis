export default class GeradorId {
    private static idCliente = 0;
    private static idAcomodacao = 0;

    public static gerarIdCliente(): number {
        this.idCliente += 1
        return this.idCliente
    }
    public static gerarIdAcomodacao(): number {
        this.idAcomodacao += 1
        return this.idAcomodacao
    }
}