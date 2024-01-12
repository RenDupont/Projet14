import { Employee } from './employeType';
import { configureStore } from '@reduxjs/toolkit';

interface AppState {
    employees: Employee[];
}

const initialState: AppState = {
    employees: []
};

const rootReducer = (state: AppState = initialState, action: any) => {
    if(action.type === 'ADD_EMPLOYEE') {
        return {
            ...state,
            employees: [...state.employees, action.payload],
        };
    }
    return state;
};

const store = configureStore({
    reducer: rootReducer
});

export default store;