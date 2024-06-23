async function anotherFunction(){
    // throw new Error ("My custom error!");
    return "code";
}


async function tryCatchExample(){
    try {
        const value= await anotherFunction();
        console.log(value);
    } catch (error) {
        console.log("Error Occurred",error);

    }
}
tryCatchExample();

