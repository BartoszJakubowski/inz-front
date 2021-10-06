import { Types } from 'models/ShopPage';

export default interface ShopPage {
    id: string;
    lagType: string;
    lagValue: number;
    name: string;
    shopType: Types;
    slug: string;
}
