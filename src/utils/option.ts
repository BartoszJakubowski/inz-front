import { Option } from 'types/options';

export function getOptionValue(selectValue: Option<any>|string|any): string|any {
    return typeof selectValue === 'object'
        ? selectValue && selectValue.value
        : selectValue;
}

export function getOption(value: string, options: any[]): any {
    return options.find(option => option?.value === value) || null;
}
