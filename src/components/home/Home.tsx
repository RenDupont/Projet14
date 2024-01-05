import Classes from './Home.module.css';
import { Link } from "react-router-dom";
import { states } from '../../assets/states';

function Home() {

    const handleSubmit = (event: React.SyntheticEvent) => {
        alert('A name was submitted');
        event.preventDefault();
    }

    return (
        <>
            <div className={Classes.title}>
                <h1>HRnet</h1>
            </div>
            <div className={Classes.container}>
                <Link to={'/employe-list'}>View Current Employees</Link>
                <h2>Create Employee</h2>
                <form onSubmit={handleSubmit} id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="date" />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="date" />

                    <fieldset className={Classes.address}>
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state">
                            {states.map((state, index) => (
                                <option key={index} value={state.abbreviation}>
                                    {state.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                    <div>
                        <input type='submit' value="Save" />
                    </div>
                </form>
            </div>
            <div id="confirmation" className={Classes.modal}>Employee Created!</div>
        </>
    );
}

export default Home;