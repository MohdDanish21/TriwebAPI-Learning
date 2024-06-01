var Username = prompt("enter your name");
 var h1tag = document.querySelector('h1');

 function setUserName(username){
    if(username==null || username==0){
        alert(" please enter your name");
    }else{
        h1tag.textContent=username;
    }
    
 }
 setUserName(Username);