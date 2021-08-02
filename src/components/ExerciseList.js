import React, { Component } from 'react'
import Exercises from './Exercises'
import Navbar from './Navbar'
import axios from 'axios';
import { useState, useEffect } from 'react'

const ExerciseList = () => {

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
            <Exercises exercises={exercises} />
        </div>
    )
}

export default ExerciseList
