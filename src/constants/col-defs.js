import { Username } from "../pages/Grid/Username";

export const colDefs = [
    {
        headerName: 'Name',
        field: 'name',
        editable: true,
        headerTooltip: 'This is user name',
        headerClass: 'text-red-500',
        cellStyle: { fontSize: 24 },
        // cellClass: 'font-bold',
        cellClass: (params) => {
            const value = params.value;
            const char = value[0].toLowerCase()
            if (char === 'c') {
                return 'text-red-500'
            } else {
                return 'text-blue-500'
            }
        },
        cellClassRules: {
            'text-green-500': 'x === "Ervin Howell"',
        }
    },
    {
        headerName: 'Username',
        field: 'username',
        cellRenderer: Username
    },
    {
        headerName: 'Email',
        field: 'email',
    },
    {
        headerName: 'Phone',
        field: 'phone',
        sortable: false
    },
    {
        headerName: 'Website',
        field: 'website'
    },
    {
        headerName: 'Address',
        field: 'address',
        valueGetter: (params) => {
            const add = params.data.address;
            return `${add.suite}, ${add.street}, ${add.city}, ${add.zipcode}`
        },
        // tooltipValueGetter: (params) => params.value,
        width: 300
    }
]

export const defaultColDefs = {
    sortable: true,
    filter: true,
    tooltipValueGetter: (params) => params.value,
}