import { Routes, Route} from 'react-router-dom';
//import './App.css';
import Home from './home/Home';
import EmployeeList from './employeList/EmployeeList';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/employee-list' element={ <EmployeeList />} />
            </Routes>
        </div>
    );
}

export default App;
	