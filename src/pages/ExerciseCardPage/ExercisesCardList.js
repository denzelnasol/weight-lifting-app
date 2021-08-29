import ExerciseCard from "./ExerciseCard";

const ExercisesCardList = ({ exercises, searchTerm }) => {

    return (
        <div className='exercises-container'>
            {
                exercises.filter((val) => {
                    if (searchTerm === '') {
                        return val
                    }
                    else if (val.exerciseName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                    else {
                        return null
                    }
                }).map((exercise) => (
                    <ExerciseCard key={exercise._id} exercise={exercise}
                    />
                ))
            }
        </div>
    )
}

export default ExercisesCardList
