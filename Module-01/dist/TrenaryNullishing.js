"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ternary Operator
const BiyeKiKorbe = (ageUser) => {
    const result = ageUser >= 22 ? "You Are An Adult" : "You Are Not An Adult";
    return result;
};
console.log(BiyeKiKorbe(20));
const userTheme = undefined;
const SelectedTheme = userTheme ?? "Light Theme";
console.log(SelectedTheme);
// optional chaining
const user = {
    name: "Taskin",
    age: 25,
    roll: 16910029,
    Depertment: "Computer Science and Technology",
    RoomNumber: 231,
    Address: {
        Street: "Room Number 231, JUST",
        City: "Dantu",
        Country: "China"
    }
};
console.log(user?.Address?.Street);
//# sourceMappingURL=TrenaryNullishing.js.map