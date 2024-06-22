const{myEventEmitter,LOGIN_EVENT}=require("./eventfile");

myEventEmitter.on(LOGIN_EVENT,(userName)=>{
    console.log("Writing in db for user:",userName);
});