import mongoose from 'mongoose'
import mongodbErrorHandler from 'mongoose-mongodb-errors'

const Admin = new mongoose.Schema({
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
})
Admin.plugin(mongodbErrorHandler)
export default mongoose.model('admin', Admin)