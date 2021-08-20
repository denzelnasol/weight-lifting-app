const LiftAverages = ({ lifts, exerciseName }) => {

    let liftFilter = lifts.filter((lift) => {
        return lift.exerciseName === exerciseName
    })

    const getAvg = (lifts, difficultyValue) => {
        let total = 0
        lifts.forEach((lift) => {
            total += lift.liftWeightLBS
        })

        return Math.trunc((total / lifts.length) * difficultyValue)
    }

    const filter = (valueOne, valueTwo) => {
        let value = liftFilter.filter(lift => lift.bodyWeightLBS >= valueOne && lift.bodyWeightLBS <= valueTwo)
        return value
    }

    let weightSections = [filter(110, 119), filter(120, 129), filter(130, 139), filter(140, 149), filter(150, 159), filter(160, 169), filter(170, 179), filter(180, 189), filter(190, 199)]

    return (
        <div className='container rounded' style={{ backgroundColor: 'white', padding: '2%', marginTop: '2%' }}>
            <h1>{exerciseName} Standards (lbs)</h1>

            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Bodyweight</th>
                        <th scope='col'>Beginner</th>
                        <th scope='col'>Novice</th>
                        <th scope='col'>Intermediate</th>
                        <th scope='col'>Advanced</th>
                        <th scope='col'>Elite</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> 110-119 </td>
                        <td> {getAvg(weightSections[0], 0.95)} </td>
                        <td> {getAvg(weightSections[0], 1.2)} </td>
                        <td> {getAvg(weightSections[0], 1.5)} </td>
                        <td> {getAvg(weightSections[0], 1.8)} </td>
                        <td> {getAvg(weightSections[0], 1.95)} </td>
                    </tr>
                    <tr>
                        <td> 120-129 </td>
                        <td> {getAvg(weightSections[1], 0.95)} </td>
                        <td> {getAvg(weightSections[1], 1.2)} </td>
                        <td> {getAvg(weightSections[1], 1.5)} </td>
                        <td> {getAvg(weightSections[1], 1.8)} </td>
                        <td> {getAvg(weightSections[1], 1.95)} </td>
                    </tr>
                    <tr>
                        <td> 130-139 </td>
                        <td> {getAvg(weightSections[2], 0.95)} </td>
                        <td> {getAvg(weightSections[2], 1.2)} </td>
                        <td> {getAvg(weightSections[2], 1.5)} </td>
                        <td> {getAvg(weightSections[2], 1.8)} </td>
                        <td> {getAvg(weightSections[2], 1.95)} </td>
                    </tr>
                    <tr>
                        <td> 140-149 </td>
                        <td> {getAvg(weightSections[3], 0.95)} </td>
                        <td> {getAvg(weightSections[3], 0.95)} </td>
                        <td> {getAvg(weightSections[3], 0.95)} </td>
                        <td> {getAvg(weightSections[3], 0.95)} </td>
                        <td> {getAvg(weightSections[3], 0.95)} </td>
                    </tr>
                    <tr>
                        <td> 150-159 </td>
                        <td> {getAvg(weightSections[4], 0.95)} </td>
                        <td> {getAvg(weightSections[4], 1.2)} </td>
                        <td> {getAvg(weightSections[4], 1.5)} </td>
                        <td> {getAvg(weightSections[4], 1.8)} </td>
                        <td> {getAvg(weightSections[4], 1.95)} </td>
                    </tr>
                    <tr>
                        <td> 160-169 </td>
                        <td> {getAvg(weightSections[5], 0.95)} </td>
                        <td> {getAvg(weightSections[5], 1.2)} </td>
                        <td> {getAvg(weightSections[5], 1.5)} </td>
                        <td> {getAvg(weightSections[5], 1.8)} </td>
                        <td> {getAvg(weightSections[5], 1.95)} </td>
                    </tr>
                    <tr>
                        <td> 170-179 </td>
                        <td> {getAvg(weightSections[6], 0.95)} </td>
                        <td> {getAvg(weightSections[6], 1.2)} </td>
                        <td> {getAvg(weightSections[6], 1.5)} </td>
                        <td> {getAvg(weightSections[6], 1.8)} </td>
                        <td> {getAvg(weightSections[6], 1.95)} </td>
                    </tr>
                    <tr>
                        <td> 180-189 </td>
                        <td> {getAvg(weightSections[7], 0.95)} </td>
                        <td> {getAvg(weightSections[7], 1.2)} </td>
                        <td> {getAvg(weightSections[7], 1.5)} </td>
                        <td> {getAvg(weightSections[7], 1.8)} </td>
                        <td> {getAvg(weightSections[7], 1.95)} </td>
                    </tr>
                    <tr>
                        <td> 190-199 </td>
                        <td> {getAvg(weightSections[8], 0.95)} </td>
                        <td> {getAvg(weightSections[8], 1.2)} </td>
                        <td> {getAvg(weightSections[8], 1.5)} </td>
                        <td> {getAvg(weightSections[8], 1.8)} </td>
                        <td> {getAvg(weightSections[8], 1.95)} </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default LiftAverages
