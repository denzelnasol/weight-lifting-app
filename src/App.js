import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import ExerciseList from './components/ExerciseList'

import axios from 'axios';
import { useState, useEffect } from 'react'

const App = () => {
  
  const [exercises, setExercises] = useState( [] )

  useEffect(() => {
    const getExercises = async () => {
      const exercisesFromServer = await axios('http://localhost:5000/exercises/')
      setExercises(exercisesFromServer.data)
    }

    getExercises()
  }, [])

  return (
    <Router>
      <div className='container'>
        <Navbar/>
        <br/>
        <Route path='/' exact component={ExerciseList}/>
      </div>
    </Router>
  )
}

export default App;
