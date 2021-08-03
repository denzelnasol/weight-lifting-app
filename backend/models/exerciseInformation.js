const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseInformationSchema = new Schema({
    exerciseName: {type: String, required: 'Please enter exercise name'},
    bodyWeightLBS: {type: Number, required: 'Please enter your bodyweight'},
    liftWeightLBS: {type: Number, required: 'Please enter your lift weight'},
}, {
    timestamps: true,
})

const ExerciseInformation = mongoose.model('ExerciseInformation', exerciseInformationSchema)

module.exports = ExerciseInformation