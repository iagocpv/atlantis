import Menu from "../interfaces/menu";

export default class MenuTipoListagemAcomodacoes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Todas as acomodações`)
        console.log(`| 2 - Acomodações ocupadas`)
        console.log(`| 3 - Acomodações livres`)
        console.log(`----------------------`)
    }
}