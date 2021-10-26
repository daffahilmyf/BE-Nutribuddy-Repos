
function MessageResponse (response, statusCode, message, data = null){
    let responseObject = {
        status: false,
        code: statusCode,
        message: message,
        data: data
    }
    
    if(statusCode >= 200 && statusCode < 300){
        responseObject.status = true

        return response.status(statusCode).json(responseObject)
    }else{
        return response.status(statusCode).json(responseObject)
    }
}

module.exports = MessageResponse