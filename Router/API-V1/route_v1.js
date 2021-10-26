const MainRoute = require('express').Router()

MainRoute.use('/api/v1', [
    require('../../Service/Authetication/auth_api.js'),
    require('../../Service/User/user_api.js')
])

module.exports = MainRoute