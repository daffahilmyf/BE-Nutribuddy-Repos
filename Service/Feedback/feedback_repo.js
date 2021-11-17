const feedbackDB = require('../../Model/feedback_model.js')

async function FeedbackRepos(fullname, email, message){
    
    const feedbackData = new feedbackDB({
        fullname: fullname,
        email: email,
        message: message
    })

    feedbackData.save()

    return feedbackData
}


module.exports = { FeedbackRepos }