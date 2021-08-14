//import router express and models
const router = require("express").Router();
const room = require("../models/room");
const Room = require("../models/room");


/*******************     Insert data to database     ******************/

http://localhost:8070/room/add

router.post(`/room/add`,(req, res) => {

    //create room type object
    let newRoom = new Room(req.body);

    newRoom.save((err) => {

        if(err){
            return res.status(400).json({ 
                error: err 
            });
        }
            return res.status(200).json({
                success: "New Room Add"
        });
    });
});

/**************************************************************/


/**********************     Retreive Data    *********************/

http://localhost:8070/room/

router.get('/room/',(req, res) => {

    Room.find().exec((err, rooms) => {

        if(err){
            return res.status(400).json({
                error: err
            });
        }
            return res.status(200).json({
                success: true,
                existingRooms: rooms
            });
    });
});

/****************************************************************/