import moment, { Moment } from 'moment';
import {
    DATETIME_API_FORMAT,
    DATETIME_DEFAULT_FORMAT,
    DATE_DEFAULT_FORMAT,
    DATE_YEARLY_DEFAULT_FORMAT,
    TIME_DEFAULT_FORMAT,
} from 'consts/dates';

export function getFormattedDate(date: Moment, format: string = 'datetime'): string {
    switch (format) {
        case 'datetime':
            format = DATETIME_API_FORMAT;
            break;
        case 'date':
            format = DATE_DEFAULT_FORMAT;
            break;
        case 'dateYearly':
            format = DATE_YEARLY_DEFAULT_FORMAT;
            break;
        case 'time':
            format = TIME_DEFAULT_FORMAT;
            break;
    }

    return moment.utc(date).local().format(format);
}

export function toApiFormat(date: Moment, utc: boolean = true): string {
    return utc
        ? moment(date).utc().format(DATETIME_API_FORMAT)
        : moment(date).format(DATETIME_API_FORMAT);
}
