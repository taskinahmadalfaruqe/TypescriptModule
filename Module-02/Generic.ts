// generic 
type genericArray<T> = Array<T>;
const userArray: genericArray<string> = ["John", "Doe", "Jane"];


// tuple with generic;
type genericTuple<X, Y> = [X, Y];
const TupleAdd: genericTuple<number, number> = [5, 10];
const TUPLE: genericTuple<number, string> = [2, 'hELLO']

type genericObject = {
    name: string;
    age: number;
}

type genericArrayOfObject<T> = Array<T>;
const genericWithArrayOfObject: genericArrayOfObject<{ name: string, age: number }> = [
    {
        name: "Taskin",
        age: 25,
    },
    {
        name: "John",
        age: 30,
    },
]