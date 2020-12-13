var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');
const APIURL = 'http://localhost:3001/viewtrains';

mongoose.connect("mongodb+srv://WorkSpace:qwerty@12345@cluster0.wq4v4.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',() =>
{
    console.log("MongoDb add bookings database connection established successfully");
});



router.get('/', async(req, res) => {
  res.render('index', { title: 'Train Booking' });
});


router.get('/viewtrains',function(req,res,next){
  request(APIURL  ,

       function (error, response, body) {

           if (!error && response.statusCode == 200) {
               res.send(body);

           } else {

               console.log(response.statusCode + response.body);

               res.send({info: NULL});

           }

       });
});

router.get('/booking', async(req, res) => 
{
    res.render('booking', { title: 'Booking info' });
});
require("./Train")
const Train = mongoose.model("trains")

router.post("/valid",urlencodedParser,(req,res) =>
  {
      //console.log(req.body)
      var tfrom = req.body.from;
      var tto = req.body.to;
      var tname=req.body.tname;
      var tnumber =req.body.tnumber;
      var qtty=req.body.NoOftickets;
      var pname = req.body.name;
      var tdate = req.body.Date;
      var userID=req.body.bookerUserID;
      //var bookingdoc = Booking({"TrainNumber":tnumber,"PassengerName":pname,"age":page,"Qnt":qtty,"from": tfrom,"to": tto}); 


      Train.findOne({trainNumber:tnumber,trainName:tname,},function(e,doc)
      {
          if(doc != null)
          {
              if(doc.trainTickets - qtty < 0)
              {
                 res.send("No avilable tickets") 
                 return;
              }
              doc.trainTickets = doc.trainTickets - qtty;
              doc.save();
              //bookingdoc.save();
              res.send("booking is done!!!")
          }else{
              res.send("train not found")
              return 
          }
  
      });
          
  });





module.exports = router;
