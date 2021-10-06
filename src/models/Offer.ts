import Model from 'models/Model';

import ApiOffer from 'types/api/Offer';
import { Option } from 'types/options';

import OfferProduct from 'models/OfferProduct';

export enum PeriodTypes {
    Single = 'single',
    Recurring = 'recurring',
}

export enum NoticePeriodDurationTypes {
    Days = 'days',
    Months = 'months',
    Years = 'years',
}

export enum Types {
    Single = 'single',
    Metamorphosis = 'metamorphosis',
    Flexible = 'flexible',
}

export default class Offer implements Model {
    id: string;
    slug: string;
    name: string;
    periodType: PeriodTypes;
    products: OfferProduct[];
    noticePeriodDurationType: NoticePeriodDurationTypes;
    noticePeriodDurationValue: number;
    type: Types;
    typeOption: Option<Types>;

    constructor(data: ApiOffer) {
        this.id = data.id;
        this.slug = data.slug;
        this.name = data.name;
        this.periodType = data.periodType;
        this.products = Array.isArray(data.products)
            ? data.products.map(product => new OfferProduct(product))
            : [];
        this.noticePeriodDurationType = data.noticePeriodDurationType;
        this.noticePeriodDurationValue = data.noticePeriodDurationValue;
        this.type = this.getType(this.periodType, this.noticePeriodDurationValue);
        this.typeOption = this.getTypeOption(this.type);
    }

    getType = (periodType: PeriodTypes, noticePeriodDurationValue: number): Types => {
        if(periodType === PeriodTypes.Single) {
            return Types.Single;
        }

        if(periodType === PeriodTypes.Recurring && noticePeriodDurationValue) {
            return Types.Metamorphosis
        }

        return Types.Flexible;
    }

    getTypeOption = (type: Types): Option<Types> => {
        return typeOptions.find(option => option.value === type) || null;
    }
}

export const typeOptions: Option<Types>[] = [{
    value: Types.Single,
    label: 'Pojedyncza',
}, {
    value: Types.Metamorphosis,
    label: 'Metamorfoza',
}, {
    value: Types.Flexible,
    label: 'Elastyczna',
}]