import UserSpecialization from 'models/UserSpecialization';
import Location from 'types/api/Location';

export default interface User {
    id: string;
    bio: string;
    name: string;
    surname: string;
    avatar?: string;
    slug: string;
    locations: Location[];
    userSpecializations: UserSpecialization[];
    primarySpecialization: UserSpecialization;
    similarTrainers: User[];
}
