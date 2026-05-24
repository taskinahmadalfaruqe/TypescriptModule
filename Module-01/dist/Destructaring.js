"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// objecct Destructuring in typascript 
const user = {
    id: 16910029,
    name: {
        firstName: "taskin",
        middleName: "Ahmad al",
        lastName: "Faruqe"
    },
    age: 25,
    balance: 1000,
    isActive: true,
    hobbies: ["programming", "gaming", "travelling"],
};
const { id, name: { middleName }, } = user;
console.log(middleName);
console.log(id);
// array destructuring in ts
const friends = ["Alice", "Bob", "Charlie", "David"];
const [, , , myBestFriend] = friends;
console.log(myBestFriend);
//# sourceMappingURL=Destructaring.js.map