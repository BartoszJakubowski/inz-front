import Model from 'models/Model';

import ApiUserEffect from 'types/api/UserEffect';

import User from 'models/User';
import FileUpload from 'models/FileUpload';

export enum Types {
    NoPhoto = 'noPhoto',
    SinglePhoto = 'singlePhoto',
    TwoPhotos = 'twoPhotos',
}

export default class UserEffect implements Model {
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

    constructor(data: ApiUserEffect) {
        this.id = data.id;
        this.user = data.user && new User(data.user) || null;
        this.lead = data.lead && new User(data.lead) || null;
        this.title = data.title;
        this.text = data.text;
        this.enabled = data.enabled;
        this.comment = data.comment;
        this.weightLoss = data.weightLoss;
        this.metabolicAge = data.metabolicAge;
        this.beltLoss = data.beltLoss;
        this.fatTissueLoss = data.fatTissueLoss;
        this.promoted = data.promoted;
        this.photo = data.photo && new FileUpload(data.photo) || null;
        this.photoBefore = data.photoBefore && new FileUpload(data.photoBefore) || null;
        this.photoAfter = data.photoAfter && new FileUpload(data.photoAfter) || null;
        this.effect = data.effect;
        this.commentAdditional = data.commentAdditional;
        this.effectDetailed = data.effectDetailed;
        this.effectHeadline = data.effectHeadline;
        this.effectSubheadline = data.effectSubheadline;
        this.type = data.type;
        this.photoInfo = data.photoInfo && new FileUpload(data.photoInfo) || null;
        this.photoDetails = data.photoDetails && new FileUpload(data.photoDetails) || null;
        this.photoComment = data.photoComment && new FileUpload(data.photoComment) || null;
    }
}