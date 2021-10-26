const service = require('express').Router()
const { LoginRepos, RegisterRepos } = require('./auth_repo.js')
const jwt = require('../../Middleware/JWT/jwt.js')
const MessageResponse = require('../../Utils/Response/response.js')
const IsInputNullOrEmpty = require('../../Utils/Handler/handler.js')

service.post('/login', async function (request, response){
    const {email, password} = request.body
    
    try{
        if(!IsInputNullOrEmpty(email, password)){
            
            const isVerified = await LoginRepos(email, password)

            if(!isVerified){
                return MessageResponse(response, 404, 'Account incorrect or does not exist')
            }

            if(isVerified){
                const userToken = jwt.GenerateAccessToken(email)

                return MessageResponse(response, 200, 'Login success', { token: userToken })
            }

        }
        
        return MessageResponse(response, 406, 'Cannot accept blank data')


    }catch(error){
        return MessageResponse(response, 500, 'Something wrong with our server')
    }

})

service.post('/register', async function(request, response){
    const {firstname, lastname, phone_number, email, password} = request.body

    try{
        if(!IsInputNullOrEmpty(firstname, lastname, phone_number, email, password)){

            const isRegistered = await RegisterRepos(firstname, lastname, phone_number, email, password)

            if(!isRegistered){
                return MessageResponse(response, 406, 'Account exist')
            }

            if(isRegistered){
                return MessageResponse(response, 201, 'Register success', { firstname, lastname })
            }
        }

        return MessageResponse(response, 406, 'Cannot accept blank data')

    }catch(error){
        return MessageResponse(response, 500, 'Something wrong with our server')
    }


})

module.exports = service