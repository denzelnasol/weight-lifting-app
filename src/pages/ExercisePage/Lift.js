import React from 'react'

const Lift = ({ lift }) => {
    return (
        <div className='row align-items start'>
            <div className="col">
                {lift.bodyWeightLBS}
            </div>
            <div className="col">
                {lift.liftWeightLBS}
            </div>
            <hr/>
        </div>
    )
}

export default Lift
