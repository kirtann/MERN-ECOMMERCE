const app = require('./app')

const dotenv = require('dotenv')
const connectDatabase = require("./config/database")
const { connect } = require('mongoose')

// Config

dotenv.config({path:'backend/config/config.env'})

// Connecting to database
connectDatabase()

const server = app.listen(process.env.PORT, ()=>{

  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


// Unhandled Promise Rejection
process.on("unhandledRejection", err=>{
  console.log(`Error: ${err.message}`);
  console.log("shutting dowm the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});

