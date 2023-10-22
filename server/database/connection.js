const mongoose = require('mongoose')

// Replace the mongoDB url 
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