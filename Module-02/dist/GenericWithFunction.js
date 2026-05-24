"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic With Function 
const genericWithFunction = (value) => {
    return [value];
};
const result01 = genericWithFunction(10);
const result02 = genericWithFunction("Hello World");
const genericFunctionWithTuple = (Perms01, Perms02) => {
    return [Perms01, Perms02];
};
const result03 = genericFunctionWithTuple(2000, "Taskin");
const genericFunctionWithObject = (StudentInfo) => {
    return {
        CourseName: " Next Lavel Web Devlopment",
        ...StudentInfo,
    };
};
const student01 = {
    name: "Taskin",
    age: 25,
};
const student02 = {
    name: "John",
    age: 30,
};
const result04 = genericFunctionWithObject(student01);
const result05 = genericFunctionWithObject(student02);
console.log(result01, result02, result03, result04);
//# sourceMappingURL=GenericWithFunction.js.map