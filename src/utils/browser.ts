export function isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window === 'object' ? true : false;
}
