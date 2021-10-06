import Model from 'models/Model';

import ApiUserSpecialization from 'types/api/UserSpecialization';
import { Option } from 'types/options';

import Specialization from 'models/Specialization';

export enum Types {
    Primary = 'type_primary',
    Secondary = 'type_secondary',
}

export default class UserSpecialization implements Model {
    id: string;
    specializationId: string;
    userId: string;
    type: Types;
    typeOption: Option<Types>;
    specialization: Specialization;

    constructor(data: ApiUserSpecialization) {
        this.id = data.id;
        this.specializationId = data.specializationId;
        this.userId = data.userId;
        this.type = this.getType(data.type);
        this.typeOption = this.getTypeOption(data.type);
        this.specialization = data.specialization && new Specialization(data.specialization) || null
    }

    getType = (type: Types): Types => {
        if (type) {
            if(type === Types.Primary) {
                return Types.Primary;
            }
    
            return Types.Secondary;
        }

        return null;
    }

    getTypeOption = (type: Types): Option<Types> => {
        return typeOptions.find(option => option.value === type) || null;
    }
}

export const typeOptions: Option<Types>[] = [{
    value: Types.Primary,
    label: 'Główna',
}, {
    value: Types.Secondary,
    label: 'Poboczna',
}]