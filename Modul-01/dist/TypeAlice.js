"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    ID: 16910029,
    Name: {
        FirstName: "Taskin",
        MiddleName: "Ahmad Al",
        LastName: "Faruqe"
    },
    Age: "25",
    ContactNumber: 1234567890,
    Address: {
        Street: "Room: 231, Bulding No:12, Jiangsu University of Science and Technology",
        City: "Dantu, Zhenjiang",
        PostalCode: "12345",
        Division: "Jiangsu",
        Country: "China"
    },
    Gender: "Male"
};
const { ID, Name: { FirstName: userName }, Address: { Street } } = user;
console.log(ID, userName, Street);
const Add = (a, b) => {
    return a + b;
};
const result = Add(5, 5);
console.log(result);
//# sourceMappingURL=TypeAlice.js.map