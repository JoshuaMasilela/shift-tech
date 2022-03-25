import { IconButton } from '@mui/material';
import Logo from '../assets/svg/credit.svg'
import { ActionsContainer, ActionToolTip, DeactivateAction, DeleteAction, EditAction, IconLink, StatusContainer, StatusText } from './Widgets/Elements/ViewCardsElements';

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
            width: 130
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
            renderCell: (params) => {
                return (
                    <StatusContainer
                        status={params.row.status === "Active" ? 1 : 0}>
                        <StatusText>{params.row.status}</StatusText>
                    </StatusContainer>
                )
            }
        },
        {
            field: 'actions',
            headerName: 'Actions',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                const data = [];
                const handleDelete = (id) => {
                  this.setState({
                    data: params.rows.filter(item => item.id !== id)
                  });
                };
                return (
                  <ActionsContainer>
        
                    <IconLink
                      to={"/edit_user/" + params.row.id}
                      state={{
                        avatar: params.row.avatar,
                        name: params.row.user,
                        surname: params.row.surname,
                        number: params.row.number,
                        email: params.row.email,
                        status: params.row.status,
                        address: params.row.address,
                      }}
                    >
                      <ActionToolTip title="Edit User info.">
        
                        <IconButton>
        
                          <EditAction />
        
                        </IconButton>
        
                      </ActionToolTip>
                    </IconLink>
        
                    <ActionToolTip title="Delete User Account.">
                      <IconButton>
                        <DeleteAction />
                      </IconButton>
                    </ActionToolTip>
        
        
                    <ActionToolTip title="Deactivate User Account.">
                      <IconButton>
                        <DeactivateAction />
                      </IconButton>
                    </ActionToolTip>
        
                  </ActionsContainer>
                )
              }
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