const{myEventEmitter,LOGIN_EVENT}=require("./eventfile");

module.exports.loginSuccessful=(userName)=>{
   setInterval(()=>{
    myEventEmitter.emit(LOGIN_EVENT,userName);
   },2000);
};