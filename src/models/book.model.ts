export class Book {

    public $key: string;

    constructor(
        public title: string,
        public edition: string,
        public year: number,
        public photo: string
    ) {}

}