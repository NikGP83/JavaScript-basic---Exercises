let triangleArea = 0;
let sideA = 5;
let sideB = 6;
let sideC = 7;

const getTriangleArea = (sideOne, sideTwo, sideThree) => {
    let halfPerimetr = (sideOne + sideTwo + sideThree) / 2
    return (triangleArea = (Math.sqrt(halfPerimetr*((halfPerimetr-sideOne)*(halfPerimetr-sideTwo)*(halfPerimetr-sideThree)))))
};

getTriangleArea(sideA, sideB, sideC);

console.log(triangleArea);