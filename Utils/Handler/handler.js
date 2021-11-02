const validator = require('email-validator')

function isInputNull(... data){
    for(i= 0; i < data.length; i++){
        if(data[i] == null){
            return true
        }
    }

    return false
}

function isInputEmpty(... data){
    for(i= 0; i < data.length; i++){
        if(data[i].length == 0 || data[i] == ' '){
            return true
        }
    }

    return false
}

function IsInputNullOrEmpty(... data){

    for(i= 0; i < data.length; i++){
        if(isInputEmpty(data[i]) || isInputNull(data[i])){
            return true
        }
    }
    

    return false
}

function IsEmailValid(email){
    return validator.validate(email)
}

module.exports = { IsInputNullOrEmpty, IsEmailValid }