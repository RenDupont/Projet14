import Classes from './EmployeeList.module.css';
import { Link } from 'react-router-dom';
import DataTable, { TableColumn  } from "react-data-table-component";
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { Employee } from '../../store/employeType';

type DataRow = {
    firstName: string;
    lastName: string;
    startDate: string;
    department: string;
    dateOfBirth: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
};


function EmployeeList() {

    const employees = useSelector((state: AppState) =>
        state.employees.map((employee: Employee) => ({
            firstName: employee.firstName,
            lastName: employee.lastName,
            startDate: employee.startDate,
            department: employee.department,
            dateOfBirth: employee.dateOfBirth,
            street: employee.address.street,
            city: employee.address.city,
            state: employee.address.state,
            zipCode: employee.address.zipCode,
        }))
    );

    
    const columns: TableColumn<DataRow>[] = [
        {
            name: 'First Name',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
        },
        {
            name: 'Start Date',
            selector: row => row.startDate,
        },
        {
            name: 'Department',
            selector: row => row.department,
        },
        {
            name: 'Date of Birth',
            selector: row => row.dateOfBirth,
        },
        {
            name: 'Street',
            selector: row => row.street,
        },
        {
            name: 'City',
            selector: row => row.city,
        },
        {
            name: 'State',
            selector: row => row.state,
        },
        {
            name: 'Zip Code',
            selector: row => row.zipCode,
        },
    ];

    return (
        <div id="employee-div" className={Classes.container}>
            <h1>Current Employees</h1>
            <DataTable
                columns={columns}
                data={employees}
                pagination
            />
            <Link to={'/'}>Home</Link>
        </div>
    );
}

export default EmployeeList;