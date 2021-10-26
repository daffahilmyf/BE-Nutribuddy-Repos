const authDB = require('../../Model/user_model.js')
const bcrypt = require('bcryptjs')

async function LoginRepos(email, password){
    const userData = await authDB.findOne({email: email})
    
    if(userData){
        return (bcrypt.compareSync(password, userData.password)) ? true : false
    }

    return false
}

async function RegisterRepos(firstname, lastname, phone_number, email, password){
    const userData = await authDB.findOne({email: email})

    if(!userData){

        const encryptPassword = bcrypt.hashSync(password, 10)

        const registerAccount = new authDB({
            firstname: firstname,
            lastname: lastname,
            phone_number: phone_number,
            email: email,
            password: encryptPassword
        })

        await registerAccount.save()

        return true
    }

    return false
}

module.exports = { LoginRepos, RegisterRepos }