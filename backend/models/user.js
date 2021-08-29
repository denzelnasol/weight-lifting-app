const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: { type: String, required: 'Pleaser enter a username' },
    email: { type: String, required: 'Please enter an email address'},
    password: { type: String, required: 'Please enter a passowrd' },
    password2: { type: String, required: 'Please enter your password again' },
    isAdmin: { type: Boolean, required: 'Please check whether admin or not' },
    date: { type: Date, default: Date.now},
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User