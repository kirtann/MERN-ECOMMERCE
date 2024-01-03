const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: 'config.env'})

const connectDatabase = ()=>{
  mongoose.connect(process.env.DB_URI).then((data)=>{
    console.log(`connected to mongodb ith server: ${data.connection.host}`);
  }).catch((err)=>{
    console.log(err)
  })
}

module.exports = connectDatabase