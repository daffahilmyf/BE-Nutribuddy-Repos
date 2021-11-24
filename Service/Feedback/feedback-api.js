const service = require('express').Router()
const MessageResponse = require('../../Utils/Response/response.js')
const { PostFeedbackData } = require('./feedback-repo.js')

service.post('/feedback', async function(request, response){
    const {fullname, email, message} = request.body
    try{
        if(!fullname &&  !email && !message){
            return MessageResponse(response, 406, 'Cannot accept blank input!')
        }

        const feedbackData = await PostFeedbackData(fullname, email, message)

        return MessageResponse(response, 201, 'Feedback recorded successfully', feedbackData)

    }catch(error){
        console.log(error)
        return MessageResponse(response, 500, 'Something wrong with our server')
    }
})

module.exports = service;