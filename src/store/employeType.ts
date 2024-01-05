
export interface Employee {
    firstName: string | null;
    lastName: string | null;
    startDate: string | null;
    department: number | null;
    dateOfBirth: string | null;
    address: {
        street: string | null;
        city: string | null;
        state: string | null;
        zipCode: number | null;
    };
}