const dbfile=require("./dbfile");

const{myEventEmitter,LOGIN_EVENT}=require("./eventfile");
const{loginSuccessful}=require("./login");
loginSuccessful("Azhar");

myEventEmitter.on(LOGIN_EVENT,(userName)=>{
    console.log("sending email to  user:",userName);
});