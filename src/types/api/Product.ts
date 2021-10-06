import { DurationTypes, LocationTypes } from 'models/Product';

export default interface Product {
    id: string;
    slug: string;
    name: string;
    displayDurationType: DurationTypes;
    displayDurationValue: number;
    durationType: DurationTypes;
    durationValue: number;
    priceGross: number;
    locationType: LocationTypes;
    secondLocationType: LocationTypes;
    thirdLocationType: LocationTypes;
    pricingMatrix: {
        quantity: string;
        usersCount: string;
        valueGross: string;
    }[]
}
