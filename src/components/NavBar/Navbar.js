import React, { useState } from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    HomeIcon
} from './NavbarElements';

const Navbar = ({ logo }) => {


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLinks
                        to="/"
                    >
                        <NavLogo src={logo} />
                    </NavLinks>
                    

                        <NavMenu>
                        <NavItem>
                                <NavLinks 
                                to="/"
                                offset={-80}>Home</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks  
                                offset={-80}
                                to="/banned"
                               >Banned Countries</NavLinks>
                            </NavItem>
                       
                        
                        </NavMenu>

                </NavbarContainer>


            </Nav>
        </>
    );

}

export default Navbar;