import Model from 'models/Model';

import ApiOfferProduct from 'types/api/OfferProduct';

import Product from 'models/Product';

export default class OfferProduct implements Model {
    id: string;
    priceGross: number;
    quantity: number;
    product: Product;

    constructor(data: ApiOfferProduct) {
        this.id = data.id;
        this.priceGross = data.priceGross;
        this.quantity = data.quantity;
        this.product = data.product && new Product(data.product) || null
    }
}