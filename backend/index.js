//importing dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


//import routes
const DestinationsRouter = require("./routes/destinations");
const guideRoute = require('./routes/guides');
const AccomdationRouter = require("./routes/Accommodations");
const RoomsRouter = require('./routes/Rooms');


//creating express app
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());


//configuring dotenv variables
const PORT = 8070;
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
app.use("/destinations", DestinationsRouter);
app.use(guideRoute);
app.use(AccomdationRouter);
app.use(RoomsRouter);
