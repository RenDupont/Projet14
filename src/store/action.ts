import { Employee } from './employeType';

const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export const addEmployee = (employee: Employee) => ({
    type: ADD_EMPLOYEE,
    payload: employee,
});