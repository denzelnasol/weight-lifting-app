const router = require('express').Router()

let ExerciseInformation = require('../models/exerciseInformation')

router.route('/').get((req, res) => {
    ExerciseInformation.find()
        .then(exercisesInformation => res.json(exercisesInformation))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const exerciseName = req.body.exerciseName
    const bodyWeightLBS = Number(req.body.bodyWeightLBS)
    const liftWeightLBS = Number(req.body.liftWeightLBS)

    const newExerciseLift = new ExerciseInformation({
        exerciseName,
        bodyWeightLBS,
        liftWeightLBS,
    })

    newExerciseLift.save()
        .then(() => res.json('Exercise lift added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    ExerciseInformation.findById(req.params.id)
        .then(exerciseInformation => res.json(exerciseInformation))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/id').delete((req, res) => {
    ExerciseInformation.findByIdAndDelete(req.params.id)
        .then(() => res.json('Lift deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('update/:id').post((req, res) => {
    ExerciseInformation.findById(req.params.id)
        .then(exerciseInformation => {
            exerciseInformation.exerciseName = req.body.exerciseName
            exerciseInformation.bodyWeightLBS = req.body.bodyWeightLBS
            exerciseInformation.liftWeightLBS = req.body.liftWeightLBS

            exerciseInformation.save()
                .then(() => res.json('Exercise Lift Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router