const userDB = require('../../Model/user_model.js')

async function GetUsers(){
    const userDatas = await userDB.find({}, {__v:0, password: 0})

    return userDatas
}

async function GetUsersById(id){
    const userData = await userDB.find({_id: id}, {__v:0, password: 0})
    
    return userData
}


module.exports = { GetUsers, GetUsersById }