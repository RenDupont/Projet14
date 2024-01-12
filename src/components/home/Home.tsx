import Classes from './Home.module.css';
import { Link } from "react-router-dom";
import { states } from '../../assets/states';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/action';

interface formState {
    firstName: string;
    lastName: string;
    startDate: string;
    department: string;
    dateOfBirth: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
}

function Home() {

    const dispatch = useDispatch();

    const [ formData, setFormData ] = useState<formState> ({
        firstName: '',
        lastName: '',
        startDate: '',
        department: '',
        dateOfBirth: '',
        street: '',
        city: '',
        state: '',
        zipCode: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const employee = {
            firstName : formData.firstName,
            lastName: formData.lastName,
            startDate: formData.startDate,
            department: formData.department,
            dateOfBirth: formData.dateOfBirth,
            address: {
                street: formData.street,
                city: formData.city,
                state: formData.state,
                zipCode: formData.zipCode,
            },
        }

        dispatch(addEmployee(employee));
        console.log(employee);
    }

    return (
        <>
            <div className={Classes.title}>
                <h1>HRnet</h1>
            </div>
            <div className={Classes.container}>
                <Link to={'/employee-list'}>View Current Employees</Link>
                <h2>Create Employee</h2>
                <form onSubmit={handleSubmit} id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input 
                        type="text" 
                        id="first-name" 
                        name='firstName'
                        value={formData.firstName} 
                        onChange={handleInputChange} 
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input 
                        type="text" 
                        id="last-name" 
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input 
                        id="date-of-birth" 
                        type="date"
                        name='dateOfBirth'
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <input 
                        id="start-date" 
                        type="date"
                        name='startDate'
                        value={formData.startDate}
                        onChange={handleInputChange}
                    />

                    <fieldset className={Classes.address}>
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input 
                            id="street" 
                            type="text"
                            name='street'
                            value={formData.street}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="city">City</label>
                        <input 
                            id="city" 
                            type="text"
                            name='city'
                            value={formData.city}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="state">State</label>
                        <select 
                            name="state" 
                            id="state"
                            value={formData.state}
                            onChange={handleSelectChange}
                        >
                            {states.map((state, index) => (
                                <option key={index} value={state.abbreviation}>
                                    {state.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input 
                            id="zip-code" 
                            type="number"
                            name='zipCode'
                            value={formData.zipCode}
                            onChange={handleInputChange}
                        />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select
                        name="department" 
                        id="department"
                        value={formData.department}
                        onChange={handleSelectChange}
                    >
                        <option value=''>Sélectionnez un département</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
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