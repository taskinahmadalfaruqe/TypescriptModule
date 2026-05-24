// Nullable Type 
const getUser = (Data: string ) => {
    if (Data) {
        console.log(Data);
    }
    else {
        console.log("All User")
    }
}
getUser("taskin");