import React from 'react'

const Calculator = () => {
    return (
        <div className='container rounded' style={{ backgroundColor: 'white', padding: '2%', fontWeight: '900rem', height: '400px' }}>
            <h1>One Rep Max Calculator</h1>
            <p>Calculate your one-rep max (1RM) for any lift. Your one-rep max is the max weight you can lift for a single repetition for a given exercise.</p>
            <form>
                <div className='form-group'>
                    <input className='form-control' type='number' />
                </div>
                <div className='form-group'>
                    <input className='form-control' type='number' />
                </div>
                <button className='btn btn-primary' type='submit'>Calculate One Rep Max</button>
            </form>
        </div>
    )
}

export default Calculator
