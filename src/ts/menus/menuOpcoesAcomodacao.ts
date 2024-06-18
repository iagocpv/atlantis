import Menu from "../interfaces/menu";

export default class MenuOpcoesAcomodacao implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de acomodação? `)
        console.log(`----------------------`)
        console.log(`| 1 - Solteiro Simples`)
        console.log(`| 2 - Casal Simples`)
        console.log(`| 3 - Família Simples`)
        console.log(`| 4 - Família Mais`)
        console.log(`| 5 - Solteiro mais`)
        console.log(`| 6 - Família Super`)
        console.log(`----------------------`)
    }
}