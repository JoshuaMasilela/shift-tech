import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoHomeOutline} from 'react-icons/io5';
export const Nav = styled.nav`
background: #FFFFFF;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
width:100%;
font-size: 1.5rem;
position: sticky;
top:0;
z-index: 10;
`;

// export const NavbarContainer = styled.div`
// display:block;
// justify-content: flex-start;
// flex:1;
// `;

export const NavbarContainer = styled.div`
display:flex;
justify-content: flex-start;
height: 80px;
z-index:1;
width: 100%;
padding: 0 4px;
`;

export const NavLogo = styled.img`
cursor: pointer;
height: 45px;
margin-left: 20px;
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
justify-conten: center;
}
`

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(Link)`
color: #010606;
display: flex;
text-align: flex-end;
text-decoration: none;
`;

export const HomeIcon =styled(IoHomeOutline)`
font-size: 2rem;
color: #00BBFF;
`;