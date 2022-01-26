import { Provincia } from "./provincia";

export class Comune {
    static count = 5000;

    id?: number;
    nome!: string;
    provincia!: Provincia;

    constructor(){
        //this.id = Comune.count++;
        this.provincia = new Provincia
    }

}
