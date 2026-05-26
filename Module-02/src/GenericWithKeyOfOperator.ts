type userDataType = {
    name: string,
    age: number,
    email: string
}
type userdatatypeWithKeyOf = keyof userDataType;
const myname: userdatatypeWithKeyOf = "name";

const userData: userDataType = {
    name: "John Doe",
    age: 30,
    email: "emaill@gmail.com"
}


const getUsename = userData["name"];


const getUserinformation = (obj: userDataType, key: userdatatypeWithKeyOf) => {
    const data = obj[key];
    return data;
}

const userName = getUserinformation(userData, "name");
console.log(userName);

// make it with Generic 
const getInformation = <T>(obj: T, key: keyof T) => {
    return obj[key];
}

const result = getInformation(userData, "name");
console.log(result);

// make it with generic 
const product = {
    brand: "Oneplus",
    model: "15pro",
    price: 800,
}

const getPrice = getInformation(product, "price");
console.log(getPrice);