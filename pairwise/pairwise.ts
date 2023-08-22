const pairwise = (arr: number[], arg: number): number => {
    const indexMap: Record<number, number> = {};

    let totalSum = 0;

    arr.forEach((num, index) => {
        const complement: number = arg - num;

        if (indexMap.hasOwnProperty(complement)) {
            totalSum += index + indexMap[complement];
            delete indexMap[complement];
        } else {
            indexMap[num] = index;
        }
    });

    return totalSum;
};
