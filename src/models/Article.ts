import Model from 'models/Model';
import moment, { Moment } from 'moment';

import ApiArticle from 'types/api/Article';

import User from 'models/User';
import FileUpload from 'models/FileUpload';
import ArticleTag from 'models/ArticleTag';

export default class Article implements Model {
    id: string;
    createdAt: Moment;
    title: string;
    lead: string;
    body: string;
    status?: string;
    author?: User;
    image: FileUpload;
    articleTags?: ArticleTag[];

    constructor(data: ApiArticle) {
        this.id = data.id;
        this.createdAt = data.createdAt && moment.utc(data.createdAt).local();
        this.title = data.title;
        this.lead = data.lead;
        this.body = data.body;
        this.status = data.status;
        this.author = data.author && new User(data.author) || null;
        this.image = data.image && new FileUpload(data.image) || null;
        this.articleTags = data.articleTags;
    }
}