const mongoose = require('mongoose')

// I replaced the mongoDB url for the connection to work :
// https://stackoverflow.com/questions/75910362/unable-to-connect-nodejs-to-mongodb
//const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'
const databaseUrl = 'mongodb://127.0.0.1:27017';

  
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}


//mongod --port 27017 --dbpath C:\MongoDB\data\db\