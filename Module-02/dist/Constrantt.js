"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// constant Generic With Function 
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
    id: 1,
};
const student02 = {
    name: "John",
    id: 2,
};
const result04 = genericFunctionWithObject(student01);
const result05 = genericFunctionWithObject(student02);
console.log(result01, result02, result03, result04, result05);
const ConstantWithtGenericFunction = (universityInfo) => {
    const universityName = " Jiangsu University";
    return {
        universityName,
        ...universityInfo,
    };
};
const university01 = { StudentName: "Taskin", ID: 242910701126, Depertment: "CST" };
const university02 = { StudentName: "John", ID: 242910701127, Depertment: "CST" };
const result06 = ConstantWithtGenericFunction(university01);
const result07 = ConstantWithtGenericFunction(university02);
console.log(result06, result07);
//# sourceMappingURL=Constrantt.js.map