const service = require('express').Router()
const MessageResponse = require('../../Utils/Response/response.js')
const {IsInputNullOrEmpty} = require('../../Utils/Handler/handler.js')
const feedbackDB = require('../../Model/feedback_model.js')

service.post('/feedback', async function(request, response){
    const {fullname, email, message} = request.body

    try {
        if(IsInputNullOrEmpty(fullname, email, message) == true){
            return MessageResponse(response, 406, 'Input should not be blank!')
        }

        const feedbackData = new feedbackDB({
            fullname: fullname,
            email: email,
            message: message
        })
    
        feedbackData.save()

        return MessageResponse(response, 201, 'Feedback send succesfully', feedbackDB)   
    } catch (error) {
        return MessageResponse(response, 500, 'Something wrong with our server')
    }
})

module.exports = service