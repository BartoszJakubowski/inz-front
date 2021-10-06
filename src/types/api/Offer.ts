import { PeriodTypes, NoticePeriodDurationTypes } from 'models/Offer';

import OfferProduct from 'types/api/OfferProduct';

export default interface Offer {
    id: string;
    slug: string;
    name: string;
    periodType: PeriodTypes;
    products: OfferProduct[];
    noticePeriodDurationType: NoticePeriodDurationTypes;
    noticePeriodDurationValue: number;
}
