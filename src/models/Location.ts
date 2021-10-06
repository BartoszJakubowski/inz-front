import Model from 'models/Model';

import ApiLocation from 'types/api/Location';
import { Option } from 'types/options';

export enum Types {
    Gym = 'gym',
    Online = 'online',
    Outside = 'outside',
    Home = 'home',
    Office = 'office',
    DoctorOffice = 'doctorOffice',
    MassageOffice = 'massageOffice',
}

export default class Location implements Model {
    id: string;
    type: Types;
    name: string;
    slug: string;
    city: string;
    address: string;
    typeOption: Option<Types>;

    constructor(data: ApiLocation) {
        this.id = data.id;
        this.type =  this.getType(this.type);
        this.name = data.name;
        this.slug = data.slug;
        this.city = data.city;
        this.address = data.address;
        this.typeOption = this.getTypeOption(this.type);
    }

    getType = (type: Types): Types => {
        if(type === Types.Gym) {
            return Types.Gym;
        }

        if(type === Types.Online) {
            return Types.Online;
        }

        if(type === Types.Outside) {
            return Types.Outside;
        }

        if(type === Types.Home) {
            return Types.Home;
        }

        if(type === Types.Office) {
            return Types.Office;
        }

        if(type === Types.DoctorOffice) {
            return Types.DoctorOffice;
        }

        if(type === Types.MassageOffice) {
            return Types.MassageOffice;
        }
    }

    getTypeOption = (type: Types): Option<Types> => {
        return typeOptions.find(option => option.value === type) || null;
    }
}

export const typeOptions: Option<Types>[] = [{
    value: Types.Gym,
    label: 'Siłownia',
}, {
    value: Types.Online,
    label: 'Online',
}, {
    value: Types.Outside,
    label: 'Plener',
}, {
    value: Types.Home,
    label: 'Dom klienta',
}, {
    value: Types.Office,
    label: 'Biuro',
}, {
    value: Types.DoctorOffice,
    label: 'Gabinet lekarski',
}, {
    value: Types.MassageOffice,
    label: 'Gabinet masażu',
}]