function failure(err){
    console.log("Failed:",err)
}

function success(result){
    console.log("Success:",result)
}

function validate(name, yesSuccess,noError){
    if(name=="abcd"){
        yesSuccess("Name is validate");
        
    }else{
        noError("not matched");
    }
}

validate("abcd",success,failure);