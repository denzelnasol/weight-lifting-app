const router = require('express').Router()

let Exercise = require('../models/exercise')

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add', (req, res) => {
  console.log(req.file)
  const exerciseName = req.body.exerciseName
  const description = req.body.description
  const image = req.body.image
  const numberOfLifts = Number(req.body.numberOfLifts)

  const newExercise = new Exercise({
    exerciseName,
    description,
    image,
    numberOfLifts,
  })

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err))
  })

  router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err))
  })

  router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise.exerciseName = req.body.exerciseName
        exercise.description = req.body.description
        exercise.image = req.body.image
        exercise.numberOfLifts = Number(req.body.numberOfLifts)
  
        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err))
      })
      .catch(err => res.status(400).json('Error: ' + err))
  })

module.exports = router