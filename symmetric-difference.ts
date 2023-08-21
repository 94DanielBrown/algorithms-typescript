const sym = (...args: number[][]) => {
    const concatenatedArray: number[] = [].concat(...args);
    const symmetricDifference: number[] = concatenatedArray.filter((element,index,array) => {
        return array.indexOf(element) === array.lastIndexOf(element);
    })
    console.log(symmetricDifference);
}

const app = () => {
    sym([1,2,3],[5,2,1,4]);
}

app();