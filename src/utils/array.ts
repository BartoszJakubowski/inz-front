export const chunk = (array: any[], chunkSize: number): any[] => {
    return array
        .reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / chunkSize);

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [];
            }

            resultArray[chunkIndex].push(item);

            return resultArray;
        }, []);
};

export function dedupeObjects(array: any[], key: string): any[] {
    return array.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t[key] === item[key]
        ))
    );
}

export function dedupe(array: any[]): any[] {
    return array.filter((item, pos) => {
        return array.indexOf(item) === pos;
    });
}