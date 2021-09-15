// Write a JavaScript to find the longest string from a given array of strings.

const findLongestStr = (arrOfStr) => {
    const elementsLength = arrOfStr.map((el) => el.length - 1);
    const maxElem = Math.max(...elementsLength);
    const indxElem = elementsLength.indexOf(maxElem);
    return arrOfStr[indxElem];
    
}

console.log(findLongestStr([`aaa`, `aaaa`, `aaaaaa`, `aaaaaaaaa`, `aaa`]));