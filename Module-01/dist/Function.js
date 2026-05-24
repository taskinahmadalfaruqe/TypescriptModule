"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function in ts 
// Arow Function , Normal Function 
let Add = (a, b) => {
    return a + b;
};
console.log(Add(5, 5));
let addArrow = (a, b) => a + b;
// object function 
const BnakUser = {
    userName: "taskin",
    balance: 0,
    addBalance(money) {
        this.balance += money;
        return this.balance;
    }
};
BnakUser.addBalance(1000);
console.log(BnakUser.balance);
const numberArray = [1, 2, 3, 4, 5];
const squertNumbrs = numberArray.map((num) => num * 2);
console.log(squertNumbrs);
//# sourceMappingURL=Function.js.map