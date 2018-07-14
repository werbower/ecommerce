export class Product {
    onSale = true;
    quantity = 0;
    constructor(
        public name: string,
        public price: number,
        public image: string
    ) {}
}
