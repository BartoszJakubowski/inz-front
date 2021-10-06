import Model from 'models/Model';

import ApiProduct from 'types/api/Product';

export enum DurationTypes {
    Minutes = 'minutes',
    Hours = 'hours',
    Days = 'days',
}

export enum LocationTypes {
    Online = 'online',
    Gym = 'gym',
    Outside = 'outside',
    Home = 'home',
    Office = 'office',
    DoctorOffice = 'doctorOffice',
    MassageOffice = 'massageOffice',
}

export default class Product implements Model {
    id: string;
    slug: string;
    name: string;
    displayDurationType: DurationTypes;
    displayDurationValue: number;
    durationType: DurationTypes;
    durationValue: number;
    durationValueMinutes: number;
    priceGross: number;
    locationType: LocationTypes;
    secondLocationType: LocationTypes;
    thirdLocationType: LocationTypes;
    mainLocationType: LocationTypes;
    pricingMatrix: {
        quantity: number;
        usersCount: number;
        valueGross: number;
    }[]

    constructor(data: ApiProduct) {
        this.id = data.id;
        this.slug = data.slug;
        this.name = data.name;
        this.displayDurationType = data.displayDurationType;
        this.displayDurationValue = data.displayDurationValue;
        this.durationType = data.durationType;
        this.durationValue = data.durationValue;
        this.durationValueMinutes = this.getDurationValueMinutes(this.displayDurationType, this.displayDurationValue);
        this.priceGross = data.priceGross;
        this.locationType = data.locationType;
        this.secondLocationType = data.secondLocationType;
        this.thirdLocationType = data.thirdLocationType;
        this.mainLocationType = data.locationType || data.secondLocationType || data.thirdLocationType;
        this.pricingMatrix = Array.isArray(data.pricingMatrix) 
            ? data.pricingMatrix.map(pricingMatrixElem => ({
                quantity: parseInt(pricingMatrixElem.quantity),
                usersCount: pricingMatrixElem.usersCount && parseInt(pricingMatrixElem.usersCount) || 1,
                valueGross: parseFloat(pricingMatrixElem.valueGross),
            }))
            : []
    }

    getDurationValueMinutes = (durationType: DurationTypes, durationValue: number): number => {
        if(durationType ===  DurationTypes.Hours) {
            return durationValue * 60;
        }

        if(durationType ===  DurationTypes.Days) {
            return durationValue * 60 * 24;
        }

        return durationValue;
    }
}