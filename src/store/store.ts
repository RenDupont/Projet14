import { createStore } from 'redux';
import { Employee } from './employeType';

interface AppState {
    employees: Employee[];
}

const initialState: AppState = {
    employees: [
        {
            firstName: null,
            lastName: null,
            startDate: null,
            department: null,
            dateOfBirth: null,
            address: {
                street: null,
                city: null,
                state: null,
                zipCode: null,
            },
        },
    ],
};

const reducer = (state: AppState = initialState, action: any) => {
    if(action.type === 'ADD_EMPLOYEE') {
        return {
            ...state,
            employees: [...state.employees, action.payload],
        };
    }
    return state;
};

const store = createStore(reducer);

export default store;