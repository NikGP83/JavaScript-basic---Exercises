// Write a JavaScript program to find the types of a given angle.

// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

const ACUTE = `Acute angle`;
const RIGHT = `Right angle`;
const OBTUSE = `Obtuse angle`;
const STRAIGHT = `Straight angle`;

export const terms = {
    acute: ACUTE,
    right: RIGHT,
    obtuse: OBTUSE,
    straight: STRAIGHT,
};

export const checkAngle = (angle) => {
    switch (true) {
        case angle < 90:
            return terms.acute;
        case angle === 90:
            return terms.right;
        case angle < 180 && angle > 90:
            return terms.obtuse;
        case angle === 180:
            return terms.straight;
        default:                      
            throw new Error(`Ошибка`);  
        
    }
};



// console.log(checkAngle(0))
// console.log(checkAngle(180))
