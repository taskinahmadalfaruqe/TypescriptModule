// Function in ts 
// Arow Function , Normal Function 
let Add = (a: number, b: number) => {
    return a + b;
}
console.log(Add(5, 5))
let addArrow = (a: number, b: number) => a + b;


// object function 
const BnakUser = {
    userName: "taskin",
    balance: 0,
    addBalance(money: number): number {
        this.balance += money;
        return this.balance;
    }
}
BnakUser.addBalance(1000);
console.log(BnakUser.balance)

const numberArray: number[] = [1, 2, 3, 4, 5];
const squertNumbrs = numberArray.map((num: number) => num * 2);
console.log(squertNumbrs)