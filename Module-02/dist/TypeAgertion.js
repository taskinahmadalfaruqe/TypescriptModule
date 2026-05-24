"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "Hello World";
console.log(anything);
const converter = (a) => {
    if (typeof a === "number") {
        return a * 1000;
    }
    else if (typeof a === 'string') {
        const [value, unit] = a.split(" ");
        return value;
    }
};
const result1 = converter(5);
console.log(result1);
const result2 = converter("5 km");
console.log(result2);
//# sourceMappingURL=TypeAgertion.js.map