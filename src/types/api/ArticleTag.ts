import moment, { Moment } from 'moment';

export default interface ArticleTag {
    id: string;
    createdAt: Moment;
    name: string;
    enabled: boolean;
    slug: string;
}
