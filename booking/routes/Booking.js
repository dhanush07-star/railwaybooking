const mongoose =require('mongoose')

mongoose.model("bookings",{
    TrainNumber:{
        type:Number,
        required:true
    },
    PassengerName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    Qnt:{
        type:Number,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    }


})