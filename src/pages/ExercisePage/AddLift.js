import { useState } from "react"

const AddLift = ({ onAdd }) => {

    const [bodyWeight, setBodyWeight] = useState('')
    const [liftWeight, setLiftWeight] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!bodyWeight || !liftWeight) {
            alert('Please add a lift')
        }
        else if (bodyWeight < 100 || liftWeight < 0) {
            alert('Please add a valid value')
        }
        else {
            onAdd({ bodyWeight, liftWeight })
        }
        setBodyWeight('')
        setLiftWeight('')
    }

    return (
        <div className='container rounded row align-items start' style={{ backgroundColor: 'white', padding: '2%', fontSize: '1.5rem ' }}>
            <form className='container' onSubmit={onSubmit}>
                <div className='form-group'>
                    <h1>Add A Lift</h1>
                </div>
                <div className='form-group'>
                    <label>Bodyweight</label>
                    <input style={{ marginLeft: '2%' }} type='number' value={bodyWeight} onChange={(e) => setBodyWeight(e.target.value)} placeholder='Input Bodyweight' />
                </div>
                <div className='form-group' style={{ marginTop: '2%' }}>
                    <label>Lift Weight</label>
                    <input style={{ marginLeft: '2%' }} type='number' value={liftWeight} onChange={(e) => setLiftWeight(e.target.value)} placeholder='Input Lift Weight' />
                </div>
                <button type='submit' value='Save Lift' className='btn btn-primary' style={{ marginTop: '2%' }}>Add</button>
            </form>
        </div>
    )
}

export default AddLift
