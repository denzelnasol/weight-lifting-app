import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ExercisePage from './components/ExercisePage'
import ExerciseCardPage from './components/ExerciseCardPage'

const App = () => {
  
  return (
    <>
      <Router>
          <Route exact path='/' component={ExerciseCardPage} />
          <Route path='/exercises/:exerciseId' component={ExercisePage}/>
      </Router>
    </>
  )
}

export default App;
