async function getName(){
    throw new error("something went wrong");
}

async function main(){
    try {
        const name =await getName();
        console.log("got the name-",name);
    } catch (error) {
        console.log("exception handling block-got error",error.message);
    }
}

main();