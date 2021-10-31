const swaggerJsDocs = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Nutribuddy API',
            version: '1.0.0',
            description: 'Library for Nutribuddy product'
        }
    },
    apis: [
        '../../Service/Authetication/auth_api.js'
    ]
}

const swaggerDocs = swaggerJsDocs(swaggerOptions)

module.exports = { swaggerUI, swaggerDocs }