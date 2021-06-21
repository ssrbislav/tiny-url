const mongoose = require('mongoose')
require('dotenv/config')

const db_connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
          console.log("DB connection established.")
    } catch (error) {
        console.log(error)
        process.exit(-1)
    }
}

module.exports = db_connect