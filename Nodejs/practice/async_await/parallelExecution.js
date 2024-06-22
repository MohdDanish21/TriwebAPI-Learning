const getName=async()=>{
    return "codebyheart";
};

async function main(){
    try {
        console.log("printing inside main")
        const name =await getName();
        console.log("got the name-",name);
    } catch (error) {
        console.log("exception handling block-got error",error.message);
    }
}
console.log("printing before main")
main();
console.log("printing after main")