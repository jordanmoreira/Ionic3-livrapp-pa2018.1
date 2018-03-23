// export class Book {

//     public $key: string;

//     constructor(
//         public title: string,
//         public edition: string,
//         public year: number,
//         public photo: string
//     ) {}

// }

export interface Book {
    key?: string,
    title: string,
    edition: string,
    year: number
}