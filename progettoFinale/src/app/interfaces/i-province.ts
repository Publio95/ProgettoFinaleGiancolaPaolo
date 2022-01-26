import { Provincia } from "../classes/clienti/provincia";

export interface IProvince {

    content: Provincia[];
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
