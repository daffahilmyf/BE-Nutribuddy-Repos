require('dotenv').config({path: '.env'})
const express = require('express')
const morgan = require('./Utils/Logger/logger.js')
const MongoConn = require('./Utils/MongoDB/mongo-singleton.js')
const MessageResponse = require('./Utils/Response/response.js')
const API_V1 = require('./Router/API-V1/route_v1.js')
const bodyParser = require('body-parser')


const server = express()
const PORT = process.env.PORT || 5000
const dbConn = new MongoConn(process.env.NODE_ENV)

server.use(morgan('myFormat'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use('/', API_V1)

server.get('/', (req, res)=>{
    res.send('Hello World')
})
server.listen(PORT, () => console.debug(`Server running on port: ${PORT}`))