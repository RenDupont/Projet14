
export interface Employee {
    firstName: string;
    lastName: string;
    startDate: string;
    department: string;
    dateOfBirth: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: number;
    };
}

export interface AppState {
    employees: Employee[];
}