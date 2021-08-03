import { BrowserRouter as Router, Route } from 'react-router-dom'
import ExercisePage from './components/ExercisePage'
import ExerciseCardPage from './components/ExerciseCardPage'
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';


const App = () => {
  
  return (
    <div className='container rounded'>
      <Navbar />
      <Router>
          <Route exact path='/' component={ExerciseCardPage} />
          <Route path='/exercises/:exerciseId' component={ExercisePage}/>
          <Route path='/calculator' component={Calculator}/>
      </Router>
    </div>
  )
}

export default App;
