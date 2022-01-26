import { Comune } from "./comune"

export class IndirizzoSedeOperativa {
    static count = 5000;


    id?: number;
    via!: string;
    civico!: string;
    cap!: string;
    localita!: string;
    comune!: Comune;
    constructor() {
        //this.id= IndirizzoSedeOperativa.count++;        
        this.comune = new Comune

    }
}
