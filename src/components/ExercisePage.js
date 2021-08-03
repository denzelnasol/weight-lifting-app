import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const ExercisePage = ({ match }) => {

    const {
        params: { exerciseId },
    } = match

    const [exercise, setExercise] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/exercises/${exerciseId}`, {})
            .then((res) => res.json())
            .then((response) => {
                setExercise(response);
                setIsLoading(false)
            })
            .catch((error) => console.log(error));
    }, [exerciseId]);

    return (
        <>
            {!isLoading && (
                <>
                    <div className='jumbotron jumbotron-fluid rounded' style={{ backgroundColor: 'white', padding: '2%', fontWeight: '900rem' }}>
                        <div className='row'>
                            <h1 className='col-md display-4'>
                                <img src={exercise.image} width="50" height="65" style={{marginRight:'1rem'}} alt="" />
                                {exercise.exerciseName} Standards</h1>
                        </div>
                        <div className='row'>
                            <h3 className='lead'>{exercise.description}</h3>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ExercisePage

