// Generic With Function 
const genericWithFunction = <T>(value: T) => {
    return [value]
}
const result01 = genericWithFunction<number>(10);
const result02 = genericWithFunction<string>("Hello World");

const genericFunctionWithTuple = <T, Y>(Perms01: T, Perms02: Y) => {
    return [Perms01, Perms02]
}
const result03 = genericFunctionWithTuple<number, string>(2000, "Taskin");



const genericFunctionWithObject = <T>(StudentInfo: T) => {
    return {
        CourseName: " Next Lavel Web Devlopment",
        ...StudentInfo,
    }
}
const student01 = {
    name: "Taskin",
    age: 25,
}
const student02 = {
    name: "John",
    age: 30,
}
const result04 = genericFunctionWithObject(student01);
const result05 = genericFunctionWithObject(student02);
console.log(result01, result02, result03, result04);
