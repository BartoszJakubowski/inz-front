import Specialization from 'types/api/Specialization';
import { Types } from 'models/UserSpecialization';

export default interface UserSpecialization {
    id: string;
    specializationId: string;
    userId: string;
    type: Types;
    specialization: Specialization
}
