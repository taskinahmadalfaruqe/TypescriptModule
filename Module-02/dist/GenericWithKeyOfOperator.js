"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myname = "name";
const userData = {
    name: "John Doe",
    age: 30,
    email: "emaill@gmail.com"
};
const getUsename = userData["name"];
const getUserinformation = (obj, key) => {
    const data = obj[key];
    return data;
};
const result = getUserinformation(userData, "name");
console.log(result);
//# sourceMappingURL=GenericWithKeyOfOperator.js.map