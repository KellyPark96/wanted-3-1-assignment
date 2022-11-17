export interface SickDataType {
    sickCd: string,
    sickNm: string
}

export interface SearchService {
    getSearch: (keyword: string) => SearchResponse;
}
export type SearchResponse = Promise<SickDataType[]>;


// export interface Cache {
//     [index: string]: Sick[];
// }
