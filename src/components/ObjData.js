import { IconButton } from '@mui/material';
import Logo from '../assets/svg/credit.svg'
import { ActionsContainer, ActionToolTip, DeactivateAction, DeleteAction, EditAction, IconLink, StatusContainer, StatusText, ViewWidgetId } from './Widgets/Elements/ViewCardsElements';
import AvatarSvg from '../assets/svg/person.svg';
///nav bar object 
export const navObj = {
  logo: Logo
};

///small widget object 
export const smlWidgetObj = {
  title: "View Credit Cards",
  columns: [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 10,
      renderCell: (params) => {
        return (
          <ViewWidgetId>{params.row.id}</ViewWidgetId>
        )
      }
    },
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
      
 

      const removeItem = async () =>{

        //get items from session storage
        let items = await JSON.parse(sessionStorage.getItem('cardDetails'));
  
        //construct object
        const cardObj = {
          id: params.row.id,
          card_number:params.row.unmasked_card_number,
          cvv:params.row.unmasked_card_cvv,
          expiry_date:params.row.unmasked_card_exp_date,
          country_code: params.row.country_code
        };
       
        //get index of object
        const index = items.indexOf(cardObj.id);

        //splice array at index of object
        items.splice(index, 1);

        //save back to session storage
       await sessionStorage.setItem('cardDetails', JSON.stringify(items));

       //refresh window
       window.location.reload();
    }

        return (
          <ActionsContainer>
            {/* pass card details to edit user screen as parameters */}
            <IconLink
              to={"/edit_user/" + params.row.id}
              
              state={{
                id: params.row.id  ,
                card_holder: params.row.cardHolder,
                ms_card: params.row.cardNumber,
                ms_cvv: params.row.cvc,
                ms_exp_date: params.row.expiry_date,
                timeStamp: params.row.timeStamp,
                country_code: params.row.country_code,

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
              <IconButton onClick={removeItem}>
                <DeleteAction  />
              </IconButton>
            </ActionToolTip>



          </ActionsContainer>
        )
      }
    },
    {
      field: 'country_code',
      headerName: 'Country Code',
      width: 110
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
fontBig: false,
big: false,
  subHeader1:'Card Number',
  subHeader2: 'Card Cvv',
  subHeader3: 'Expiry Date',
}

//globeobject

export const globeObj={
  height: '70vh',
  width: '100%',
  viewTitle: "View Banned Countries",
  addTitle: 'Select Country To Ban.',
  columns: [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 10,
    },
    {
      field: 'city',
      headerName: 'Country Name',
      width: 140,
      sortable: true,
    },
    {
      field: 'latlng',
      headerName: 'Coordinates',
      width: 190
    },

    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 90,
      renderCell: (params) => {
      
      const removeItem = async () =>{

        //get items from session storage
        let items = await JSON.parse(sessionStorage.getItem('blockedCountries'));
  
        //construct object
        const cardObj = {
          id: params.row.id,
          city:params.row.city,
          coordinates:params.row.coordinates,
      
        };

     
        //get index of object
        const index = items.indexOf(cardObj.city);

        console.log(index)
        //splice array at index of object
        items.splice(index, 1);

        //save back to session storage
       await sessionStorage.setItem('blockedCountries', JSON.stringify(items));

    }

        return (
          <ActionsContainer>
            {/* pass card details to edit user screen as parameters */}
          

            <ActionToolTip title="Delete User Info.">
              <IconButton onClick={removeItem}>
                <DeleteAction  />
              </IconButton>
            </ActionToolTip>

          </ActionsContainer>
        )
      }
    },
  ],
};
