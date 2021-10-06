import { Locales } from 'types/locales';
import { Locale } from 'locales/types/locale';

import { deserialize, replaceObjectVariables } from 'utils/object';

import pl from 'locales/pl.json';

export function getLocale(locale: Locales = null): Locale {    
    const result = deserialize({ ...pl });
    return replaceObjectVariables({ ...result }, { ...result });
}

