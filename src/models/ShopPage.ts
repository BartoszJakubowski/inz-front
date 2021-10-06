import Model from 'models/Model';

import ApiShopPage from 'types/api/ShopPage';

export enum Types {
    Reservation = 'reservation',
    Shop = 'shop',
}

export default class ShopPage implements Model {
    id: string;
    lagType: string;
    lagValue: number;
    name: string;
    shopType: Types;
    slug: string;

    constructor(data: ApiShopPage) {
        this.id = data.id;
        this.lagType = data.lagType;
        this.lagValue = data.lagValue;
        this.name = data.name;
        this.shopType = data.shopType;
        this.slug = data.slug;
    }
}
