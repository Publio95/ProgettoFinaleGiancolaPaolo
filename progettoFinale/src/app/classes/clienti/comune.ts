import { Provincia } from "./provincia";

export class Comune {

    id!: number;
    nome!: string;
    provincia!: Provincia;

    constructor(){
        this.provincia = new Provincia
    }

}
