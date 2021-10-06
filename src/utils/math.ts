export function formatPrice(price: number = 0): number {
    return Math.round(price * 100) / 100;
}

export function displayPrice(price: number = 0, suffix = ' zł'): string {
    return `${price}${suffix}`;
}

export function changeToCent(price: number = 0): number {
    return price * 100;
}

export function changeFromCent(price: number = 0): number {
    return formatPrice(
        price / 100
    );
}

export function round(number: number, places = 2): number {
    const pow = Math.pow(10, places)
    return Math.round((number + Number.EPSILON) * pow) / pow;
}