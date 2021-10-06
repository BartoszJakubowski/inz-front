import User from 'types/api/User';
import FileUpload from 'types/api/FileUpload';

export default interface UserEffect {
    id: string;
    user?: User;
    lead?: User;
    title: string;
    text: string;
    enabled: boolean;
    comment?: string;
    weightLoss?: number;
    metabolicAge?: number;
    beltLoss?: number;
    fatTissueLoss?: number;
    promoted: boolean;
    photo?: FileUpload;
    photoBefore?: FileUpload;
    photoAfter?: FileUpload;
    photoInfo?: FileUpload;
    photoDetails?: FileUpload;
    photoComment?: FileUpload;
    effect: string;
    commentAdditional: string;
    effectDetailed: string;
    effectHeadline?: string;
    effectSubheadline?: string;
    type: string;
}
