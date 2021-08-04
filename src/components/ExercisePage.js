import React from 'react'
import { useState, useEffect } from 'react'

import LiftList from './LiftList'

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
        fetch('http://localhost:5000/exercisesInformation', {})
            .then((res) => res.json())
            .then((response) => {
                setExerciseLifts(response)
                setLiftIsLoading(false)
                console.log(exerciseLifts)
            })
            .catch((error) => console.log(error))
    }, []);



    return (
        <>

            {!exerciseIsLoading && !liftIsLoading && (
                <div style={{ paddingBottom: '2%' }}>
                    <div className='jumbotron jumbotron-fluid rounded' style={{ backgroundColor: 'white', padding: '2%' }}>
                        <div className='row'>
                            <h1 className='col-md display-4'>
                                <img src={exercise.image} width="50" height="65" style={{ marginRight: '1rem' }} alt="" />
                                {exercise.exerciseName} Standards</h1>
                        </div>
                        <div className='row'>
                            <h3 className='lead'>{exercise.description}</h3>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col col-md-4'>
                            <div className='container rounded' style={{ backgroundColor: 'white', padding: '4%', fontWeight: '900rem', marginTop: '2%' }}>
                                <div className='row align-items start jumbotron' style={{ fontWeight: '700' }}>
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
                                <LiftList lifts={exerciseLifts} exerciseName={exercise.exerciseName}/>
                            </div>
                        </div>
                        <div className='col col-md-6'>
                            <div className='container rounded' style={{ backgroundColor: 'white', padding: '2%', fontWeight: '900rem', marginTop: '2%' }}>
                                <div className='row align-items start jumbotron' style={{ fontWeight: '700' }}>
                                    <div style={{ fontSize: '2.20rem ' }}>
                                        Add A Lift
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

