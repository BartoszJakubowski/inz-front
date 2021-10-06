
import Model from 'models/Model';
import ApiFileUpload from 'types/api/FileUpload';

export enum Types {
    OrderItemFile = 'orderItemFile',
    OrderCommentFile = 'orderCommentFile',
    OrderAcceptanceFile = 'orderAcceptanceFile',
}

export default class FileUpload implements Model {
    id: string;
    fileName: string;
    originalName: string;
    mimeType: string;
    putUrl?: string;
    getUrl: number;
    storagePath: string;
    imageUrl: string;

    constructor(data: ApiFileUpload) {
        this.id = data.id;
        this.fileName = data.fileName;
        this.originalName = data.originalName;
        this.mimeType = data.mimeType;
        this.putUrl = data.putUrl;
        this.getUrl = data.getUrl;
        this.storagePath = data.storagePath;
        this.imageUrl = data.imageUrl;
    }
}
