// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive. 

const LOW_BOUNDARY_1 = 40;
const HI_BOUNDARY_1 = 60;
const LOW_BOUNDARY_2 = 70;
const HI_BOUNDARY_2 = 100;

const rangeLow ={low: LOW_BOUNDARY_1 , hi: HI_BOUNDARY_1 };
const rangeHi = {low:LOW_BOUNDARY_2 , hi:HI_BOUNDARY_2 };

const ranges = [rangeLow, rangeHi];

const isInRange = (value, range)=> range.low<=value && value<=range.hi;

const inAnyRange = (value) => ranges.some((range)=>isInRange(value,range));

const checkRangeNum = (a,b) => inAnyRange(a) && inAnyRange(b);


console.log(checkRangeNum(45, 55));
console.log(checkRangeNum(75, 1000));