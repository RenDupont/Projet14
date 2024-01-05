import { Routes, Route} from 'react-router-dom';
//import './App.css';
import Home from './home/Home';
import EmployeList from './employeList/EmployeList';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/employe-list' element={ <EmployeList />} />
            </Routes>
        </div>
    );
}

export default App;
	