// export class Book {

//     public $key: string;

//     constructor(
//         public title: string,
//         public edition: string,
//         public price: number,
//         public year: number,
//         public obs?: string
//     ) { }
// }

export interface Book {
    key?: string,
    title: string,
    edition: string,
    obs?: string,
    price: number,
    year: number
}