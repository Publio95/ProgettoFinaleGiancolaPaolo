import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";

export class Clienti {

        id?: number;
        ragioneSociale!: string;
        partitaIva!: string;
        tipoCliente!: string;
        email!: string;
        pec!: string;
        telefono!: string;
        nomeContatto!: string;
        cognomeContatto!: string;
        telefonoContatto!: string;
        emailContatto!: string;
        indirizzoSedeOperativa!: IndirizzoSedeOperativa;
        indirizzoSedeLegale!: IndirizzoSedeLegale
        dataInserimento!: string;
        dataUltimoContatto!: string;
        

        constructor() {
                
                this.indirizzoSedeOperativa = new IndirizzoSedeOperativa;
                this.indirizzoSedeLegale = new IndirizzoSedeLegale;
                this.dataInserimento = "2019-06-01T08:11:01.911+00:00";
                this.dataUltimoContatto = "2021-03-24T21:32:06.375+00:00";

        }

}
