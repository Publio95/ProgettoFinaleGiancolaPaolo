import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti/clienti';
import { Comune } from '../classes/clienti/comune';
import { ClientiService } from '../services/clienti.service';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  cliente: Clienti = new Clienti()
  tipoCliente: string[] = []
  comune: Comune[] = []
  nomeComune: string [] = []

  prova: Clienti = {
   
    "ragioneSociale": "Bruno-Romano SPA - TEST",
    "partitaIva": "14812266616",
    "tipoCliente": "SRL",
    "email": "rosalino.caruso@gmail.com",
    "pec": "antonio.damico@gmail.com",
    "telefono": "+38 855 62 44 5685",
    "nomeContatto": "Sarita",
    "cognomeContatto": "Serr",
    "telefonoContatto": "380.260.3225",
    "emailContatto": "armando.martinelli@hotmail.com",
    "indirizzoSedeOperativa": {
        "via": "Contrada Gastone 4, Piano 4",
        "civico": "698",
        "cap": "38615",
        "localita": "Vania del friuli",
        "comune": {
            "id": 1,
            "nome": "LASTRA A SIGNA",
            "provincia": {
                "id": 1,
                "nome": "FIRENZE",
                "sigla": "FI"
            }
        }
    },
    "indirizzoSedeLegale": {
        "via": "Strada Ricci 55, Appartamento 58",
        "civico": "925",
        "cap": "65995",
        "localita": "Ivonne umbro",
        "comune": {
            "id": 1,
            "nome": "LASTRA A SIGNA",
            "provincia": {
                "id": 1,
                "nome": "FIRENZE",
                "sigla": "FI"
            }
        }
    },
    "dataInserimento": "2019-06-01T08:11:01.911+00:00",
    "dataUltimoContatto": "2021-03-24T21:32:06.375+00:00",
   
  }

  constructor(private clienteService: ClientiService, private router: Router, private comuniService: ComuniService) { }

  ngOnInit(): void {
    this.clienteService.getTipiCliente().subscribe(data => this.tipoCliente = data);
    this.comuniService.getAllComuni().subscribe(data2 => this.comune = data2.content );
  }

aggiungi(){

//this.cliente.indirizzoSedeLegale = new IndirizzoSedeLegale();
//this.cliente.indirizzoSedeOperativa = new IndirizzoSedeOperativa();

  this.clienteService.creaCliente(this.cliente).subscribe(response => this.cliente = response)
 console.log(this.cliente)
 
  // this.router.navigate(['clienti'])
}


}
