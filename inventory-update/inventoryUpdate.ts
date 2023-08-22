const updateInventory = (curInv, newInv) => {
    for (let newItem of newInv) {
        const existingItem = curInv.find((item) => item[1] === newItem[1])
        if (existingItem) {
            existingItem[0] += newItem[0]
        } else {
            curInv.push(newItem)
        }
    }

    curInv.sort((a,b) => a[1].localeCompare(b[1]))
    return curInv;
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

const app = () => {
    console.log(updateInventory(curInv, newInv));
}

app();