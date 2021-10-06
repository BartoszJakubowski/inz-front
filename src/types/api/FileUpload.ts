export default interface FileUpload {
    id: string;
    fileName: string;
    originalName: string;
    mimeType: string;
    putUrl?: string;
    getUrl: number;
    storagePath: string;
    imageUrl: string;
}