import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import EmployeesScreen from './screens/EmployeesScreen';
import RegisterScreen from './screens/RegisterScreen';
import Dashboard from './screens/templates/Dashboard';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router >
      <Header/>
      <Container>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/hr' element={<Dashboard />} />
        <Route path='/employees' element={<EmployeesScreen/>} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
