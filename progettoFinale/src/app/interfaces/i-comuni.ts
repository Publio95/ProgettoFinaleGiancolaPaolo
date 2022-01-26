import { Comune } from "../classes/clienti/comune";

export interface IComuni {
    content: Comune[];
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
