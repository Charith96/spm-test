//importing dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser'); //use for convert json format to javaScript
const cors = require('cors');

//creating express app
const app = express();
//require("dotenv").config();


//import routes
const accomdation = require('./routes/Accommodations');


//app middleware
app.use(bodyParser.json());
app.use(cors());


//app router
app.use(accomdation);

//configuring dotenv variables
const PORT = process.env.PORT || 8070;
const MONGO_URI = 'mongodb+srv://wcharith:wcharith123@cluster0.rubsc.mongodb.net/TravelHelpDB?retryWrites=true&w=majority';

//creating express server
app.listen(PORT, async () => {
  //mongoDB connection
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("MongoDB connected!🔥");
  } catch (error) {
    console.log(error);
  }

  console.log(`Express server running at PORT ${PORT} 😍`);
});

//routes
