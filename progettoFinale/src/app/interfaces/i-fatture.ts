import { Fatture } from "../classes/fatture/fatture";

export interface IFatture {

    content: Fatture[];
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
