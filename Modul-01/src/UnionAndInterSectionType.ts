// UnionAndInterSectionType.ts 

// Union Type
type UserRoll = "Admin" | "User" | "Guest";;
const GetDashbord = (UserType: UserRoll) => {
    if (UserType === "Admin") {
        console.log("Welcome To Admin Dashboard.")
    } else if (UserType === "User") {
        console.log("Welocome to user Dashbord.")
    } else {
        console.log("Welcome Guest! You have no access to the dashboard.")
    }
}
GetDashbord("Admin");

// InterSection Type
type JUSTStudent = {
    name: string,
    age: number,
    roll: number,
}
type JUSTTeacher = {
    Depertment: string,
    RoomNumber: number,
}
type JUSTPerson = JUSTStudent & JUSTTeacher;
const person: JUSTPerson = {
    name: "Taskin",
    age: 25,
    roll: 16910029,
    Depertment: "Computer Science and Technology",
    RoomNumber: 231
}
console.log(person)