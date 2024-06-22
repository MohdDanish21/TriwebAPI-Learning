async function giveMeName(){
    return "Code by heart";
}

async function main(){
    const name=await giveMeName();// we can use await in async function
    console.log("name is",name);
}
main();