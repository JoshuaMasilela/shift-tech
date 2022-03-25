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
            width: 170,
            sortable: true,
        },
        {
            field: 'cardNumber',
            headerName: 'Card Number',
            width: 130
        },
      
        {
            field: 'actions',
            headerName: 'Actions',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 90,
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
                        address: params.row.address,
                      }}
                    >
                      <ActionToolTip title="Edit User info.">
        
                        <IconButton>
        
                          <EditAction />
        
                        </IconButton>
        
                      </ActionToolTip>
                    </IconLink>
        
                    <ActionToolTip title="Delete User Info.">
                      <IconButton>
                        <DeleteAction />
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