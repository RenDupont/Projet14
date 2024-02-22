import Classes from './EmployeeList.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { Employee } from '../../store/employeType';
import DataTable from 'data-table-projet-14/dist/DataTable';
import { useMemo } from 'react';

/**
 * Composant EmployeeList pour afficher la liste des employés.
 *
 * @returns Le composant EmployeeList
 */
function EmployeeList(): JSX.Element {

    // Sélection des employés depuis le store Redux
    const employees = useSelector((state: AppState) => state.employees);

    // Mappage des employés pour adapter le format des données à celui attendu par le composant DataTable
    const mappedEmployees = useMemo(() =>
        employees.map((employee: Employee) => ({
            firstName: employee.firstName,
            lastName: employee.lastName,
            startDate: employee.startDate,
            department: employee.department,
            dateOfBirth: employee.dateOfBirth,
            street: employee.address.street,
            city: employee.address.city,
            state: employee.address.state,
            zipCode: employee.address.zipCode,
        })),
        [employees]
    );

    // Jeu de données pour test
    const dataTest = [
        {
            firstName: "John",
            lastName: "Doe",
            startDate: "2022-01-15",
            department: "Sales",
            dateOfBirth: "1985-03-10",
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: 12345
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            startDate: "2022-02-20",
            department: "Marketing",
            dateOfBirth: "1990-07-25",
            street: "456 Oak St",
            city: "Another City",
            state: "NY",
            zipCode: 67890
        },
        {
            firstName: "Bob",
            lastName: "Johnson",
            startDate: "2022-03-05",
            department: "Engineering",
            dateOfBirth: "1982-11-15",
            street: "789 Pine St",
            city: "Yet Another City",
            state: "TX",
            zipCode: 54321
        },
        {
            firstName: "Alice",
            lastName: "Williams",
            startDate: "2022-04-12",
            department: "Human Resources",
            dateOfBirth: "1975-09-30",
            street: "101 Cedar St",
            city: "Cityville",
            state: "FL",
            zipCode: 98765
        },
        {
            firstName: "Charlie",
            lastName: "Brown",
            startDate: "2022-05-18",
            department: "Legal",
            dateOfBirth: "1993-04-05",
            street: "202 Maple St",
            city: "Maple City",
            state: "IL",
            zipCode: 24680
        },
        {
            firstName: "Eva",
            lastName: "Johnson",
            startDate: "2022-06-25",
            department: "Engineering",
            dateOfBirth: "1988-12-20",
            street: "345 Cedar St",
            city: "Citytown",
            state: "WA",
            zipCode: 56789
        },
        {
            firstName: "Michael",
            lastName: "Davis",
            startDate: "2022-07-10",
            department: "Sales",
            dateOfBirth: "1995-02-15",
            street: "567 Pine St",
            city: "Pineville",
            state: "OR",
            zipCode: 43210
        },
        {
            firstName: "Sophia",
            lastName: "Brown",
            startDate: "2022-08-30",
            department: "Marketing",
            dateOfBirth: "1980-06-22",
            street: "678 Oak St",
            city: "Oak City",
            state: "UT",
            zipCode: 13579
        },
        {
            firstName: "William",
            lastName: "Smith",
            startDate: "2022-09-15",
            department: "Legal",
            dateOfBirth: "1998-07-18",
            street: "789 Maple St",
            city: "Mapletown",
            state: "NV",
            zipCode: 98765
        },
        {
            firstName: "Olivia",
            lastName: "Miller",
            startDate: "2022-10-05",
            department: "Human Resources",
            dateOfBirth: "1985-04-30",
            street: "890 Pine St",
            city: "Pinetown",
            state: "ID",
            zipCode: 24680
        },
        {
            firstName: "James",
            lastName: "Jones",
            startDate: "2022-11-20",
            department: "Engineering",
            dateOfBirth: "1978-11-10",
            street: "901 Cedar St",
            city: "Cedar City",
            state: "MT",
            zipCode: 54321
        },
        {
            firstName: "Emma",
            lastName: "Taylor",
            startDate: "2022-12-05",
            department: "Sales",
            dateOfBirth: "1991-08-05",
            street: "234 Oak St",
            city: "Oakville",
            state: "WY",
            zipCode: 1223
        },
    ];
    
    // Colonnes à afficher dans le DataTable
    const columns = [
        { key: 'firstName', label: 'First Name' },
        { key: 'lastName', label: 'Last Name' },
        { key: 'startDate', label: 'Start date' },
        { key: 'department', label: 'Department' },
        { key: 'dateOfBirth', label: 'Date of birth' },
        { key: 'street', label: 'Street' },
        { key: 'city', label: 'City' },
        { key: 'state', label: 'State' },
        { key: 'zipCode', label: 'ZipCode' },
    ];

    // Rendu du composant EmployeeList
    return (
        <div id="employee-div" className={Classes.container}>
            <h1>Current Employees</h1>
            <DataTable
                columns={columns}
                data={dataTest}
            />
            <Link to={'/'}>Home</Link>
        </div>
    );
}

export default EmployeeList;