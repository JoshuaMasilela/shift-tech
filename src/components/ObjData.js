import Logo from '../assets/svg/credit.svg'

///nav bar object 
export const navObj = {
    logo: Logo
};

///small widget object 
export const smlWidgetObj = {
    title: "View Credit Cards",
    columns: [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'cardHolder',
            headerName: 'Card holder name',
            width: 130,
            sortable: true,
        },
        { 
            field: 'cardNumber', 
            headerName: 'Card Number',
            width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 100,
            sortable: true,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
    ],
    th: [
        {
            title: "Card Holder",
        },
        {
            title: "Card #",
        },
        {
            title: "Status",
        },
        {
            title: "Actions",
        },

    ],
};

///large widget object 
export const lrgWidgetObj = {
    title: "Add new Credit Card"
};

//submit card button static object data 
export const submitButtonObj = {
    primary: true,
    big: false,
    dark: true,
    fontBig: false,
}

//encryption and decryption key
export const decryptKey = {
    key: "123"
}