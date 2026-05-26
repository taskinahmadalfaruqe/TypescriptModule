// constant Generic With Function 
const genericWithFunction = <T>(value: T) => {
    return [value]
}
const result01 = genericWithFunction<number>(10);
const result02 = genericWithFunction<string>("Hello World");

const genericFunctionWithTuple = <T, Y>(Perms01: T, Perms02: Y) => {
    return [Perms01, Perms02]
}
const result03 = genericFunctionWithTuple<number, string>(2000, "Taskin");



const genericFunctionWithObject = <T extends { name: string, id: number }>(StudentInfo: T) => {
    return {
        CourseName: " Next Lavel Web Devlopment",
        ...StudentInfo,
    }
}
const student01 = {
    name: "Taskin",
    id: 1,
}
const student02 = {
    name: "John",
    id: 2,
}
const result04 = genericFunctionWithObject(student01);
const result05 = genericFunctionWithObject(student02);
console.log(result01, result02, result03, result04, result05);

const ConstantWithtGenericFunction = <T extends { Depertment: string, ID: number }>(universityInfo: T) => {
    const universityName = " Jiangsu University";
    return {
        universityName,
        ...universityInfo,
    }
}

const university01 = { StudentName: "Taskin", ID: 242910701126, Depertment: "CST" };
const university02 = { StudentName: "John", ID: 242910701127, Depertment: "CST" };
const result06 = ConstantWithtGenericFunction(university01);
const result07 = ConstantWithtGenericFunction(university02);
console.log(result06, result07);