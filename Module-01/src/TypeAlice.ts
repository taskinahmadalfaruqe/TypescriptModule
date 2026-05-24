// Type Alice in Typescript
type User = {
    ID: number,
    Name: {
        FirstName: string,
        MiddleName: string,
        LastName: string
    },
    Age: string,
    ContactNumber: number,
    Address: {
        Street: string,
        City: string,
        PostalCode: string,
        Division: string,
        Country: string
    },
    Gender: "Male" | "Female",
}
const user: User = {
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
}
const { ID, Name: { FirstName: userName }, Address: { Street } } = user;
console.log(ID, userName, Street);

// Function Alice in Typascript 
type AddFunction = (a: number, b: number) => number;
const Add: AddFunction = (a, b) => {
    return a + b;
}
const result = Add(5, 5);
console.log(result)