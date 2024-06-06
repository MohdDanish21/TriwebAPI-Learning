const addPrefixBeforeEveryLine=(strToAddPrefix)=>{
    const prefixToAdd="$";
    return strToAddPrefix
    .split("\n")
    .map((str)=>prefixToAdd+str)
    .join("\n");
};

const strToLog = addPrefixBeforeEveryLine(`my first line 
my second line`);
console.log(strToLog);