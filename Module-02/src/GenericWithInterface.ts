// Generic With Interface 
interface userList<T> {
    name: string,
    age: number,
    sellery: number,
    device: {
        name: string,
        price: number,
        model: string,
    },
    SmartWatch: T,
}
interface XinjiSmartWatch {
    Name: string,
    Model: string,
}
const user1: userList<XinjiSmartWatch> = {
    name: "Taskin",
    age: 25,
    sellery: 50000,
    device: {
        name: "Oneplus",
        price: 120000,
        model: "15Pro",
    },
    SmartWatch: {
        Name: "Xinjia",
        Model: "XJ-2024",
    },
}