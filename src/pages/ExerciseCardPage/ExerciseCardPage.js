import ExercisesCardList from './ExercisesCardList'
import axios from 'axios';
import { useState, useEffect } from 'react'

const ExerciseCardPage = () => {

    const [exercises, setExercises] = useState([])
    // debugger
    useEffect(() => {
        const getExercises = async () => {
            const exercisesFromServer = await axios.get('http://localhost:5000/exercises/')
            setExercises(exercisesFromServer.data)
        }

        getExercises()
    }, [])

    return (
        <div className='container'>
            
            {console.log(exercises)}
            <ExercisesCardList exercises={exercises} />
        </div>
    )
}

export default ExerciseCardPage
