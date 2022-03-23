import React, { useState } from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
} from './NavbarElements';

const Navbar = ({ logo }) => {


        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo src={logo} />
                    </NavbarContainer>
                </Nav>
            </>
        );

}

export default Navbar;