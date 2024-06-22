//immediate invoked function  expression

async function getName(){
    return "codeByHeart";
}

(async ()=>{
    const name= await getName();
    console.log("Name is ",name);
})();