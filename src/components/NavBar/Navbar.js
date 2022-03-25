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

                </NavbarContainer>


            </Nav>
        </>
    );

}

export default Navbar;