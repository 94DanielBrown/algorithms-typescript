// BELOW ONLY WORKS for 2 arrays
// const sym = (...args: number[][]) => {
//     const concatenatedArray: number[] = [].concat(...args);
//     const symmetricDifference: number[] = concatenatedArray.filter((element,index,array) => {
//         return array.indexOf(element) === array.lastIndexOf(element);
//     })
//     console.log(symmetricDifference);
// }
const sym = (...args) => [...new Set(args.reduce(diff))];
const app = () => {
    const result = sym([1,2,3,3],[5,2,1,4]);
    console.log(result);
}

const diff = (arr1, arr2) => [
    ...arr1.filter(e => !arr2.includes(e)),
    ...arr2.filter(e => !arr1.includes(e))
];

app();

