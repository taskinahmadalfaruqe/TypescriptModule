"use strict";
// UnionAndInterSectionType.ts 
Object.defineProperty(exports, "__esModule", { value: true });
;
const GetDashbord = (UserType) => {
    if (UserType === "Admin") {
        console.log("Welcome To Admin Dashboard.");
    }
    else if (UserType === "User") {
        console.log("Welocome to user Dashbord.");
    }
    else {
        console.log("Welcome Guest! You have no access to the dashboard.");
    }
};
GetDashbord("Admin");
const person = {
    name: "Taskin",
    age: 25,
    roll: 16910029,
    Depertment: "Computer Science and Technology",
    RoomNumber: 231
};
console.log(person);
//# sourceMappingURL=UnionAndInterSectionType.js.map