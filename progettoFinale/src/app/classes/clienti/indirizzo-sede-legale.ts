import { Comune } from "./comune"

export class IndirizzoSedeLegale {
    static count = 5000;

    id?: number;
    via!: string;
    civico!: string;
    cap!: string;
    localita!: string;
    comune!: Comune;

    constructor(){
        //this.id= IndirizzoSedeLegale.count++;        
        this.comune = new Comune
    }
}
