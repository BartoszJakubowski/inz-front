import { ListProps as ButtonListProps } from 'components/layout/Button';

import Component from './component';

export interface Props {
    ranges: {
        month: string;
        hour: string;
    }
    sections: Section[]
    summary: {
        title: string;
        priceLabel: string;
        rangeLabel: string;
        ranges: {
            month: string;
            hour: string;
        }
        buttons?: ButtonListProps[];
    }
}

export interface Section {
    key: string;
    label: string;
    subSections: SubSection[];
}

export interface SubSection {
    key: string;
    label: string;
    min: number;
    max: number;
    pricePerHour: number;
    unit: string;
    defaultValue: number;
}

export enum Ranges {
    Month = 'month',
    Hours = 'hours',
}

Component.defaultProps = {};
export default Component;