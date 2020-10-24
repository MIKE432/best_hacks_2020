(function() {

    let defaults = {
        sequelizeDb: {
            databaseName: 'aggaton',
            username: 'postgres',
            password: '<password>',
            options: {
                host: 'localhost',
                dialect: 'postgres',
                port: 5432
            }
        },
        paths: {
            routes: '*/routes/*.js',
            models: '*/models/*.js',
        },
        redis: {
            host: 'localhost', 
            port: 6379
        },
        session: {
            secret: '128591cbb12a3b061d58b1b0240d0c06'
        }
    };
    console.log(process.env.NODE_ENV)
    if(process.env.NODE_ENV === "dev") {
        const fs = require('fs')
        if(fs.existsSync(__dirname + "/local-defaults-override.js"))
            require("./local-defaults-override.js")(defaults)
    }

    module.exports = defaults;
})();


//local-defaults-override to funkcja zmienijąca coś

// const localDefaults = require('./local-defaults')

// module.exports = (defaults) => {
//     defaults.sequelizeDb = localDefaults.sequelizeDb


//     return defaults
// }