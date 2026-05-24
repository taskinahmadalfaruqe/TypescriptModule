// interface 
interface user {
    name: string;
    age: number;
}
const iUser: user = {
    name: "Taskin",
    age: 25,
}
interface user2 extends user {
    Email: string;
}
const iuser2: user2 = {
    name: "Taskin",
    age: 25,
    Email: "taskinahmed180@gmail.com",
}

interface add {
    (a: number, b: number): number
};
const addnumber: add = (a, b) => {
    return a + b;
}