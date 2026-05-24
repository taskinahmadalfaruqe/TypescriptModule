let anything: any;
anything = "Hello World";
console.log(anything);

const converter = (a: string | number): number | undefined => {
    if (typeof a === "number") {
        return a * 1000;
    } else if (typeof a === 'string') {
        const [value] = a.split(" ");
        return parseFloat(value) * 1000;
    }
}

const result1 = converter(5) as number;
console.log(result1);
const result2 = converter("5 km") as number;
console.log(result2);
