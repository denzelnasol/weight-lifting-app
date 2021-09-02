import { BrowserRouter as Router, Route } from 'react-router-dom'
import ExercisePage from './pages/ExercisePage/ExercisePage'
import ExerciseCardPage from './pages/ExerciseCardPage/ExerciseCardPage'
import Navbar from './common/components/Navbar'
import Calculator from './pages/CalculatorPage/Calculator'
// import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  
  return (
    <div className='container rounded'>
      <Router>
          <Navbar />
          <Route exact path='/' component={ExerciseCardPage} />
          <Route path='/exercises/:exerciseId' component={ExercisePage}/>
          <Route path='/calculator' component={Calculator}/>
          {/* <Route path='/login' component={Login}/> */}
          <Route path='/register' component={Register}/>
      </Router>
    </div>
  )
}

export default App;
