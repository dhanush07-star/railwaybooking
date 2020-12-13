const mongoose = require("mongoose");

mongoose.model("trains",{
    trainName: {
        type: String,
        require: true
    },
    trainNumber: {
        type: Number,
        require: true
    },
    trainTickets: {
        type: Number,
        require: true
    },
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    }
    // trainDate: {
    //     type: Date,
    //     require: true
    //  },
});