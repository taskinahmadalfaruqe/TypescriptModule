"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Rest And Spread Operator
// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
// sperade in objects
const user = {
    name: "Taskin Ahmad Al Faruqe",
    age: 25,
};
const updateUserInfo = {
    Address: "Dhaka, Bangladesh",
};
const updateUserInformations = {
    ...user,
    ...updateUserInfo
};
console.log(updateUserInformations);
// Rest Operator
const myFriends = ["Alice", "Bob", "Charlie", "David"];
const sendInvita = (...friends) => {
    friends.forEach((friend) => {
        console.log(`You Are Invited: ${friend}`);
    });
};
sendInvita("t", "a", "s"); // Output: You Are Invited: Alice,Bob,Charlie,David
//# sourceMappingURL=RestAndSpreadOperator.js.map