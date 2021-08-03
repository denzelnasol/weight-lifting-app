import { Link } from "react-router-dom"

const ExerciseCard = ({ exercise }) => {
    return (
        <div className='card mb-3 ms-3' style={{width: '18rem', backgroundColor: '#dbd3d3'}}>
            <div className='card-body'>
                <img className='card-img-top ExerciseListItem-img card-img-height img-responsive' src={exercise.image} alt='Card image cap' />
                <div className='card-body text-center'>
                    <h5 className='card-title'>{exercise.exerciseName}</h5>
                    <p className='card-text'>{exercise.numberOfLifts} lifts </p>
                    <Link to={`/exercises/${exercise._id}`} className='stretched-link'></Link>
                </div>
            </div>
        </div>
    )
}

export default ExerciseCard
