var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://WorkSpace:qwerty@12345@cluster0.wq4v4.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',() =>
{
    console.log("MongoDb add train database connection established successfully");
});
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
require("./Train")
var trainModel =mongoose.model("Train");


router.get("/viewtrains",(req,res) =>
{
    trainModel.find().then((trains) =>
    {
        res.json(trains)
    }).catch(err =>
        {
            if(err){
                throw err;
            }
        })
})
module.exports = router;