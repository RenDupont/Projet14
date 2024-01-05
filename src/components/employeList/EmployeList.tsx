import Classes from './EmployeList.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';

function EmployeList() {

    useEffect(() => {
        $('#employee-table').DataTable({
            data: [],
            columns: [
                { title: 'First Name', data: 'firstName' },
                { title: 'Last Name', data: 'lastName' },
                { title: 'Start Date', data: 'startDate' },
                { title: 'Department', data: 'department' },
                { title: 'Date of Birth', data: 'dateOfBirth' },
                { title: 'Street', data: 'street' },
                { title: 'City', data: 'city' },
                { title: 'State', data: 'state' },
                { title: 'Zip Code', data: 'zipCode' },
            ]
        });
    }, []);

    return (
        <div id="employee-div" className={Classes.container}>
            <h1>Current Employees</h1>
            <table id="employee-table" className={Classes.display}></table>
            <Link to={'/'}>Home</Link>
        </div>
    );
}

export default EmployeList;