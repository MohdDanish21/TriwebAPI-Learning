let fName =document.getElementById("fname");
let lName =document.getElementById("lname");
let Email =document.getElementById("email");
let phone =document.getElementById("phone");



function validateFrom(){
    if(fName.value ==""){
        document.getElementById("nameError").innerHTML=" *Please enter your name*";

    } 
        if(fName.value.length<5){
            document.getElementById('nameError').innerHTML="*Please write more than one character*";
        
         }
        if(!isNaN(fName.value)){
             document.getElementById('nameError').innerHTML="*Please write Alphabets in the box*";
        
         }
         else{
            document.getElementById('nameError').innerHTML="";
         }
    if(lName.value==""){
        document.getElementById("lastnameError").innerHTML="*Last name is required*";

    }   if(lName.value.length<5){
             document.getElementById("lastnameError").innerHTML="*Please write more than one character*";
        
         } 
         if(!isNaN(lName.value)){
            document.getElementById("lastnameError").innerHTML="*Please write Alphabets in the box*";
       
        }
        else{
            document.getElementById("lastnameError").innerHTML="";
         }

    if(Email.value==""){
        document.getElementById("emailError").innerHTML="*Please enter your Email* ";
    }
        if(Email.value.indexOf('@')<=0){
             document.getElementById("emailError").innerHTML="*invalid position of @** ";

         }
         else{
            document.getElementById("emailError").innerHTML="";
         }

    if(phone.value==""){
        document.getElementById("phoneError").innerHTML="*Phone number is required*";
    }
        if(isNaN(phone.value)){
        document.getElementById("phoneError").innerHTML="*Please write Number in the box*";
   
         }
         if(phone.value.length<10){
            document.getElementById("phoneError").innerHTML="*Please write 10 Digit mobile number*";
       
        }
         else
         {
            document.getElementById("phoneError").innerHTML="";
         }
    
    return false;
}