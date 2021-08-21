import ExercisesCardList from './ExercisesCardList'
import axios from 'axios';
import { useState, useEffect } from 'react'

const ExerciseCardPage = () => {

    const [exercises, setExercises] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const getExercises = async () => {
            const exercisesFromServer = await axios.get('http://localhost:5000/exercises/')
            setExercises(exercisesFromServer.data)
        }

        getExercises()
    }, [])

    return (
        <div className='container'>
            <input className="form-control" type='text' placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}}/>
            <ExercisesCardList exercises={exercises} searchTerm={searchTerm}/>
        </div>
    )
}

export default ExerciseCardPage
