import ExerciseCard from "./ExerciseCard";

const ExercisesCardList = ({ exercises }) => {

    return (
        <div className='exercises-container'>
            {exercises.map((exercise) => (
                <ExerciseCard key={exercise._id} exercise={exercise}
                />
            ))}
        </div>
    )
}

export default ExercisesCardList
