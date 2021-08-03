import React from 'react'
import axios from 'axios';
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
            console.log(`http://localhost:5000/exercises/${exerciseId}`);
          })
          .catch((error) => console.log(error));
      }, [exerciseId]);

    return (
        <>
            {!isLoading && (
                <>
                    <h1 style={{backgroundColor:'white'}}>{exercise.exerciseName}</h1>
                    <h1 style={{backgroundColor:'white'}}>{exercise.description}</h1>
                    <Link to="/">Back to Exercises</Link>
                </>
            )}
        </>
    )
}

export default ExercisePage

