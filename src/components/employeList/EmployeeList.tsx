import Classes from './EmployeeList.module.css';
import { Link } from 'react-router-dom';
//import DataTable, { TableColumn  } from "react-data-table-component";
import DataTable from 'mon-projet-biblio-react';
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

    

    console.log(employees);
    
    const columns = [
        { key: 'firstName', label: 'First Name' },
        { key: 'lastName', label: 'Last Name' },
        { key: 'startDate', label: 'startDate' },
        { key: 'department', label: 'department' },
        { key: 'dateofBirth', label: 'dateOfBirth' },
        { key: 'street', label: 'street' },
        { key: 'city', label: 'city' },
        { key: 'state', label: 'state' },
        { key: 'zipCode', label: 'zipCode' },
    ];

    console.log('employees', employees);
    console.log('columns', columns);

    return (
        <div id="employee-div" className={Classes.container}>
            <h1>Current Employees</h1>
            <DataTable
                key={employees.length}
                columns={columns}
                data={employees}
            />
            <Link to={'/'}>Home</Link>
        </div>
    );
}

export default EmployeeList;