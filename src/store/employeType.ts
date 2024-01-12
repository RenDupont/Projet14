
export interface Employee {
    firstName: string;
    lastName: string;
    startDate: string;
    department: number;
    dateOfBirth: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: number;
    };
}