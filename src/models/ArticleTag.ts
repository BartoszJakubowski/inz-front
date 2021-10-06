import moment, { Moment } from 'moment';

import Model from 'models/Model';

import ApiArticleTag from 'types/api/ArticleTag';

export default class ArticleTag implements Model {
    id: string;
    createdAt: Moment;
    name: string;
    enabled: boolean;
    slug: string;

    constructor(data: ApiArticleTag) {
        this.id = data.id;
        this.createdAt = data.createdAt && moment.utc(data.createdAt).local();
        this.name = data.name;
        this.enabled = data.enabled;
        this.slug = data.slug;
    }
}