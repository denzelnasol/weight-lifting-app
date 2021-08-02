import Exercise from "./Exercise";

const Exercises = ({ exercises }) => {

    return (
        <div className='exercises-container'>
            {exercises.map((exercise) => (
                <Exercise key={exercise.id} exercise={exercise}
                />
            ))}
        </div>
    )
}

export default Exercises
