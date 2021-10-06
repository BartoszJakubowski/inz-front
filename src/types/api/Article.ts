import User from 'types/api/User';
import FileUpload from 'types/api/FileUpload';
import ArticleTag from 'types/api/ArticleTag';

export default interface Article {
    id: string;
    createdAt: any;
    title: string;
    lead: string;
    body: string;
    status?: string;
    author?: User;
    image: FileUpload;
    articleTags?: ArticleTag[];
}
