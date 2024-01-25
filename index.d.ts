declare module 'mon-projet-biblio-react' {
    import * as React from 'react';
  
    interface DataRow {
		firstName: string;
		lastName: string;
		startDate: string;
		department: string;
		dateOfBirth: string;
		street: string;
		city: string;
		state: string;
		zipCode: number;
    }
  
    interface DataColumn {
		key: string;
		label: string;
    }
  
    interface DataTableProps {
		columns: DataColumn[];
		data: DataRow[];
    }
  
    export class DataTable extends React.Component<DataTableProps> {}
  }