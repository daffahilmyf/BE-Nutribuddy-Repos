const feedbackDB = require('../../Model/feedback_model.js')


async function PostFeedbackData(fullname, email, message){

    const feedbackData = new feedbackDB({
        fullname: fullname,
        email: email,
        message: message
    })

    await feedbackData.save()
  
    return feedbackData
}

module.exports = {PostFeedbackData}

