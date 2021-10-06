import Model from 'models/Model';

import ApiSpecialization from 'types/api/Specialization';

export default class Specialization implements Model {
    id: string;
    name: string;
    visibleOnPage: boolean;
    slug: string;
    enabled: boolean;

    constructor(data: ApiSpecialization) {
        this.id = data.id;
        this.name = data.name;
        this.visibleOnPage = data.visibleOnPage;
        this.slug = data.slug;
        this.enabled = data.enabled;
    }
}