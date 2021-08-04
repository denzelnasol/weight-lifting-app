import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import LiftList from './LiftList'
import AddLift from './AddLift'
import ExercisePageJumbotron from './ExercisePageJumbotron'

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
                <div style={{ paddingBottom: '2%' }}>
                    <ExercisePageJumbotron exercise={exercise}/>

                    <div className='row'>
                        <div className='col col-md-4'>
                            <div className='container rounded' style={{ backgroundColor: 'white', padding: '4%', fontWeight: '900rem', marginTop: '2%' }}>
                                <div className='row align-items start' style={{ fontWeight: '700' }}>
                                    <div style={{ fontSize: '2.20rem ' }}>
                                        Male {exercise.exerciseName} Lift History in LBS
                                    </div>
                                </div>

                                <hr style={{ height: '0.2rem' }} />

                                <div className='row align-items start' style={{ fontWeight: '700' }}>
                                    <div className="col">
                                        Bodyweight
                                    </div>
                                    <div className="col">
                                        Lift Weight
                                    </div>

                                    <hr style={{ height: '0.1rem' }} />
                                </div>
                                <LiftList lifts={exerciseLifts} exerciseName={exercise.exerciseName} />
                            </div>
                        </div>
                        <div className='col col-md-6'>
                            <div className='container rounded' style={{ backgroundColor: 'white', padding: '2%', marginTop: '1.5%' }}>
                                <div className='row align-items start'>
                                    <div style={{ fontSize: '1.5rem ' }}>
                                        <AddLift onAdd={addLift}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ExercisePage

