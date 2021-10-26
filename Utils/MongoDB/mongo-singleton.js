const MongoDB = require('mongoose')

function MongoEnvironmentConnect(environment){
    const connectionURI = (environment == 'production') ?  process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV

    MongoDB.connect(connectionURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.debug(`Connected to MongoDB ${environment}`))
        .catch((err) => console.error(err))
}

class MongoConnSingleton{

    constructor(environment) {

        if (!!MongoConnSingleton.instance) {
            return MongoConnSingleton.instance;
        }

        MongoEnvironmentConnect(environment)
            
        MongoConnSingleton.instance = this

        return this
    }

}

module.exports = MongoConnSingleton