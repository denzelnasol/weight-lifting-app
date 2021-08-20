const LiftAverages = ({ lifts, exerciseName }) => {

    let liftFilter = lifts.filter((lift) => {
        return lift.exerciseName === exerciseName
    })

    let _110to119 = liftFilter.filter((lift) => {
        return lift.bodyWeightLBS >= 110 && lift.bodyWeightLBS <= 119
    })

    const getAvg = (lifts) => {
        let total = 0
        lifts.forEach((lift) => {
            total += lift.liftWeightLBS
        })

        return Math.trunc(total / lifts.length)
    }

    let _120to129 = liftFilter.filter((lift) => {
        return lift.bodyWeightLBS >= 120 && lift.bodyWeightLBS <= 129
    })

    let _130to139 = liftFilter.filter((lift) => {
        return lift.bodyWeightLBS >= 130 && lift.bodyWeightLBS <= 139
    })

    let _140to149 = liftFilter.filter((lift) => {
        return lift.bodyWeightLBS >= 140 && lift.bodyWeightLBS <= 149
    })

    let _150to159 = liftFilter.filter((lift) => {
        return lift.bodyWeightLBS >= 150 && lift.bodyWeightLBS <= 159
    })

    let _160to169 = liftFilter.filter((lift) => {
        return lift.bodyWeightLBS >= 160 && lift.bodyWeightLBS <= 169
    })

    let _170to179 = liftFilter.filter((lift) => {
        return lift.bodyWeightLBS >= 170 && lift.bodyWeightLBS <= 179
    })

    let _180to189 = liftFilter.filter((lift) => {
        return lift.bodyWeightLBS >= 180 && lift.bodyWeightLBS <= 189
    })

    let _190to199 = liftFilter.filter((lift) => {
        return lift.bodyWeightLBS >= 190 && lift.bodyWeightLBS <= 199
    })

    return (
        <div className='container rounded' style={{ backgroundColor: 'white', padding: '2%', fontWeight: '900rem', marginTop: '2%' }}>
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
                        <td> {Math.trunc(getAvg(_110to119) * 0.95)} </td>
                        <td> 3 </td>
                        <td> 4 </td>
                        <td> 5 </td>
                        <td> 6 </td>
                    </tr>
                    <tr>
                        <td> 120-129 </td>
                        <td> 2 </td>
                        <td> 3 </td>
                        <td> 4 </td>
                        <td> 5 </td>
                        <td> 6 </td>
                    </tr>
                    <tr>
                        <td> 130-139 </td>
                        <td> 2 </td>
                        <td> 3 </td>
                        <td> 4 </td>
                        <td> 5 </td>
                        <td> 6 </td>
                    </tr>
                    <tr>
                        <td> 140-149 </td>
                        <td> 2 </td>
                        <td> 3 </td>
                        <td> 4 </td>
                        <td> 5 </td>
                        <td> 6 </td>
                    </tr>
                    <tr>
                        <td> 150-159 </td>
                        <td> {Math.trunc(getAvg(_150to159) * 0.95)} </td>
                        <td> {Math.trunc(getAvg(_150to159) * 1.2)} </td>
                        <td> {Math.trunc(getAvg(_150to159) * 1.5)} </td>
                        <td> {Math.trunc(getAvg(_150to159) * 1.8)} </td>
                        <td> {Math.trunc(getAvg(_150to159) * 1.95)} </td>
                    </tr>
                    <tr>
                        <td> 160-169 </td>
                        <td> 2 </td>
                        <td> 3 </td>
                        <td> 4 </td>
                        <td> 5 </td>
                        <td> 6 </td>
                    </tr>
                    <tr>
                        <td> 170-179 </td>
                        <td> 2 </td>
                        <td> 3 </td>
                        <td> 4 </td>
                        <td> 5 </td>
                        <td> 6 </td>
                    </tr>
                    <tr>
                        <td> 180-189 </td>
                        <td> 2 </td>
                        <td> 3 </td>
                        <td> 4 </td>
                        <td> 5 </td>
                        <td> 6 </td>
                    </tr>
                    <tr>
                        <td> 190-199 </td>
                        <td> 2 </td>
                        <td> 3 </td>
                        <td> 4 </td>
                        <td> 5 </td>
                        <td> 6 </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LiftAverages
