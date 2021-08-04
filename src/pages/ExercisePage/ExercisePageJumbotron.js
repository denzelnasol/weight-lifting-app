const ExercisePageJumbotron = ({ exercise }) => {
    return (
        <div className='jumbotron jumbotron-fluid rounded' style={{ backgroundColor: 'white', padding: '2%' }}>
            <div className='row'>
                <h1 className='col-md display-4'>
                    <img src={exercise.image} width="50" height="65" style={{ marginRight: '1rem' }} alt="" />
                    {exercise.exerciseName} Standards</h1>
            </div>
            <div className='row'>
                <h3 className='lead'>{exercise.description}</h3>
            </div>
        </div>
    )
}

export default ExercisePageJumbotron
