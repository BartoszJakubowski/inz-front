import Model from 'models/Model';

import ApiUser from 'types/api/User';

import Location from 'models/Location';
import UserSpecialization from 'models/UserSpecialization';

export default class User implements Model {
    id: string;
    bio: string;
    name: string;
    surname: string;
    avatar: string;
    slug: string;
    locations: Location[];
    fullName: string;
    userSpecializations: UserSpecialization[];
    primarySpecialization: UserSpecialization;
    similarTrainers: User[];

    constructor(data: ApiUser) {
        this.id = data.id;
        this.bio = data.bio;
        this.name = data.name;
        this.surname = data.surname;
        this.avatar = data.avatar;
        this.slug = data.slug;
        this.locations = Array.isArray(data.locations)
            ? data.locations
                .filter(location => location)
                .map(location => new Location(location))
            : [];
        this.fullName = this.getFullName(this.name, this.surname);
        this.userSpecializations = Array.isArray(data.userSpecializations)
            ? data.userSpecializations.map(userSpecialization => new UserSpecialization(userSpecialization))
            : [];
        this.similarTrainers = Array.isArray(data.similarTrainers)
            ? data.similarTrainers.map(similarTrainer => new User(similarTrainer))
            : [];
        this.primarySpecialization = data.primarySpecialization;
    }

    getFullName = (name?: string, surname?: string): string => {
        return `${name || ''} ${surname || ''}`;
    }
}