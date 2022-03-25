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
                    <NavLogo src={logo} />
                </NavbarContainer>

                <NavMenu>
                    <NavItem>
                        <NavLinks
                            to="/"
                          >
                                <HomeIcon/>
                            </NavLinks>
                    </NavItem>
                </NavMenu>
            </Nav>
        </>
    );

}

export default Navbar;