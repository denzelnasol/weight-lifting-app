import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import LiftHistory from './LiftHistory'
import AddLift from './AddLift'
import ExercisePageJumbotron from './ExercisePageJumbotron'
import LiftAverages from './LiftAverages'

const ExercisePage = ({ match }) => {

    const {
        params: { exerciseId },
    } = match

    const [exercise, setExercise] = useState()
    const [exerciseIsLoading, setExerciseIsLoading] = useState(true)

    const [exerciseLifts, setExerciseLifts] = useState()
    const [liftIsLoading, setLiftIsLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/exercises/${exerciseId}`, {})
            .then((res) => res.json())
            .then((response) => {
                setExercise(response)
                setExerciseIsLoading(false)
            })
            .catch((error) => console.log(error))
    }, [exerciseId]);

    useEffect(() => {
        const getExerciseLifts = async () => {
            const exercisesFromServer = await axios('http://localhost:5000/exercisesInformation')
            setExerciseLifts(exercisesFromServer.data)
            setLiftIsLoading(false)
        }

        getExerciseLifts()

    }, []);

    const addLift = (lift) => {

        let newLift = {
            "exerciseName": exercise.exerciseName,
            "bodyWeightLBS": lift.bodyWeight,
            "liftWeightLBS": lift.liftWeight
        }

        updateNumberOfLifts()


        return fetch('http://localhost:5000/exercisesInformation/add', {
            method: 'POST',
            body: JSON.stringify(newLift),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(window.location.reload())
    }

    const updateNumberOfLifts = () => {
        let test = {
            "exerciseName": exercise.exerciseName,
            "description": exercise.description,
            "image": exercise.image,
            "numberOfLifts": exercise.numberOfLifts + 1
        }

        return fetch(`http://localhost:5000/exercises/update/${exerciseId}`, {
            method: 'POST',
            body: JSON.stringify(test),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <>
            {!exerciseIsLoading && !liftIsLoading && (
                <div>
                    <ExercisePageJumbotron exercise={exercise} />

                    <div className='row' style={{marginTop:'2%'}}>
                        <div className='col col-md-6'>
                            <LiftHistory lifts={exerciseLifts} exerciseName={exercise.exerciseName} />
                        </div>
                        <div className='col col-md-6'>
                            <AddLift onAdd={addLift} />
                        </div>
                    </div>

                    <div className='row'> 
                        <LiftAverages lifts={exerciseLifts} exerciseName={exercise.exerciseName} />
                    </div>
                </div>
            )}
        </>
    )
}

export default ExercisePage

