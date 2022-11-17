import mongoose from "mongoose";
import mongodbErrorHandler from 'mongoose-mongodb-errors'

const Students = new mongoose.Schema({

    name: {
        type: String,
        trim: true
    },
    department: {
        type: String,
        trim: true
    },
    Level: {
        type: String,
        trim: true
    },
    Exam: {
        type: String,
        trim: true
    },
    Course: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    join: {
        type: Date,
        default: Date.now()
    }


})
Users.plugin(mongodbErrorHandler)

export default mongoose.model('Students', Students);
