import Product from 'types/api/Product';

export default interface OfferProduct {
    id: string;
    priceGross: number;
    quantity: number;
    product: Product;
}
