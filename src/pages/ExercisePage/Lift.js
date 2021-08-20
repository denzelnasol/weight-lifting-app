import React from 'react'

const Lift = ({ lift }) => {
    return (
        <tr>
            <td> {lift.bodyWeightLBS} </td>
            <td> {lift.liftWeightLBS} </td>
        </tr>
    )
}

export default Lift
