import ExercisesCardList from './ExercisesCardList'
import axios from 'axios';
import { useState, useEffect } from 'react'
import Navbar from './Navbar';

const ExerciseCardPage = () => {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const getExercises = async () => {
            const exercisesFromServer = await axios('http://localhost:5000/exercises/')
            setExercises(exercisesFromServer.data)
        }

        getExercises()
    }, [])

    return (
        <div className='container'>
            <Navbar />
            <ExercisesCardList exercises={exercises} />
        </div>
    )
}

export default ExerciseCardPage
