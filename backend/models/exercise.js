const mongoose = require('mongoose')
const { updateParenthesizedType } = require('typescript')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    exerciseName: { type: String, required: 'Please enter exercise name' }, 
    description: { type: String, required: 'Please enter description' },
    image: { type: String, required: 'Please insert image'},
    numberOfLifts: { type: Number, required: 'Please enter the number of lifts' },
}, {
    timestamps: true,
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise