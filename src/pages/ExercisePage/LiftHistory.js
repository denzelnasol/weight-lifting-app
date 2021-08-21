import React from 'react'
import Lift from './Lift'

const LiftHistory = ({ lifts, exerciseName }) => {

    let liftFilter = lifts.filter((lift) => {
        return lift.exerciseName === exerciseName
    })

    const render = () => {
        if (liftFilter.length == 0) {
            return true
        }
        else {
            liftFilter.map((lift) => (
                <Lift key={lift._id} lift={lift}
                />
            ))
        }
    }

    return (
        <div className='container rounded overflow-auto' style={{ backgroundColor: 'white', padding: '4%', height:'400px' }}>
            <div style={{ fontSize: '2.20rem ' }}>
                Male {exerciseName} Lift History in LBS
            </div>

            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Bodyweight</th>
                        <th scope='col'>Lift Weight</th>
                    </tr>
                </thead>

                <tbody>
                    {liftFilter.map((lift) => (
                        <Lift key={lift._id} lift={lift}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LiftHistory
