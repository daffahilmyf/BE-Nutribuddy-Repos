const service = require('express').Router()
const MessageResponse = require('../../Utils/Response/response.js')
const { VerifyToken } = require('../../Middleware/JWT/jwt.js')
const { GetUsers, GetUsersById } = require('./user_repo.js')
const IsInputNullOrEmpty = require('../../Utils/Handler/handler.js')

service.get('/users', async function(request, response){
    try{

        const userDatas = await GetUsers()

        return MessageResponse(response, 200, 'Gathering data success', userDatas)

    }catch(error){
        return MessageResponse(response, 500, 'Something wrong with our server')
    }
})

service.get('/users/:id', async function(request, response){
    const { id } = request.params
    try{
        const userData = await GetUsersById(id)

        if(IsInputNullOrEmpty(userData)){

            return MessageResponse(response, 404, 'Data not found', userData)
            
        }
        
        return MessageResponse(response, 200, 'Gathering data success', userData)

    }catch(error){
        
        return MessageResponse(response, 500, 'Something wrong with our server')
    }
})

module.exports = service