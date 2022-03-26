import { IconButton } from '@mui/material';
import Logo from '../assets/svg/credit.svg'
import { ActionsContainer, ActionToolTip, DeactivateAction, DeleteAction, EditAction, IconLink, StatusContainer, StatusText } from './Widgets/Elements/ViewCardsElements';
import AvatarSvg from '../assets/svg/person.svg';
///nav bar object 
export const navObj = {
  logo: Logo
};

///small widget object 
export const smlWidgetObj = {
  title: "View Credit Cards",
  columns: [
    { field: 'id', headerName: 'ID', width: 10 },
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
            {/* pass card details to edit user screen as parameters */}
            <IconLink
              to={"/edit_user/" + params.row.id}
              state={{
                card_holder: params.row.cardHolder,
                ms_card: params.row.cardNumber,
                ms_cvv: params.row.cvc,
                ms_exp_date: params.row.expiry_date,
                timeStamp: params.row.timeStamp,

                card_cvc: params.row.unmasked_card_cvv,
                card_exp: params.row.unmasked_card_exp_date,
                card_number: params.row.unmasked_card_number,

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
    {
      field: 'timeStamp',
      headerName: 'Created At',
      width: 200
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

//edit user Card Details

export const editObj = {
  id: 'edit',
  title: 'Edit Card Details',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  imgStart: true,
  img: AvatarSvg,
  alt: 'avatar',
  dark: true,
  primary: false,
  darkText: true,
  subHeader1:'Card Number',
  subHeader2: 'Card Cvv',
  subHeader3: 'Expiry Date',
}