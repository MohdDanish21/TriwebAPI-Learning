function anotherFunction(){
    throw new Error ("My custom error!");
    return "code";
}


function tryCatchExample(){
    try {
        const value=anotherFunction();
        console.log(value);
    } catch (error) {
        console.log("Error Occurred",error);

    }
}
tryCatchExample();

