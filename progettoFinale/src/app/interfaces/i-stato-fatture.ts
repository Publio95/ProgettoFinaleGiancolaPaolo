import { Stato } from "../classes/fatture/stato";

export interface IStatoFatture {
    content: Stato[];
    empty: string;
    first: string;
    last: string;
    number: number;
    numberOfElements: number;
    pageable: Object ;
    size: number;
    sort: Object;
    totalElements: number;
    totalPages: number;

}
