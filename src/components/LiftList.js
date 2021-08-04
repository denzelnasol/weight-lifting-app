import React from 'react'
import Lift from './Lift'

const LiftList = ({ lifts, exerciseName }) => {

    var liftFilter = lifts.filter((lift) => {
        return lift.exerciseName === exerciseName
    })

    return (
        <div className='container'>
            {liftFilter.map((lift) => (
                <Lift key={lift._id} lift={lift}
                />
            ))}
        </div>
    )
}

export default LiftList
