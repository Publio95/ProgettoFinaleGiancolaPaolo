import { Clienti } from "../clienti/clienti";
import { Stato } from "./stato";

export class Fatture {

    id?: number;
    data!: string;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!: Stato;
    cliente!: Clienti;

    constructor(){
        this.stato = new Stato;
        this.cliente = new Clienti;
    }

}
