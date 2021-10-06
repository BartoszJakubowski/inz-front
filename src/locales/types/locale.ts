import { Navigation, Page } from './components';

import { PageContent as Home } from 'components/modules/public/pages/Home';
import { PageContent as Login } from 'components/modules/public/pages/Login';
import { PageContent as Register } from 'components/modules/public/pages/Register';

export interface Locale {
    navigation: Navigation;
    home: Page<Home>;
    login: Page<Login>;
    register: Page<Register>;
}