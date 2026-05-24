// generic 
type genericArray<T> = Array<T>;
const userArray: genericArray<string> = ["John", "Doe", "Jane"];


// tuple with generic;
type genericTuple<X, Y> = [X, Y];
const TupleAdd: genericTuple<number, number> = [5, 10];
const TUPLE: genericTuple<number, string> = [2, 'hELLO']