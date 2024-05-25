'use client';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { NavLink, PrimaryTitle } from '../shared/Text';
import Image from 'next/image';
import Logo from '../../media/images/Logo Chrisnaf.png';
import { WhiteButton } from '../shared/Form';
import { MenuIcon, XIcon } from 'lucide-react';

export default function Header() {
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

    return (
        <StyledHeader>
            <h1>Christopher Nafrere</h1>

            <Nav>
                <NavLink href="/">Acceuil</NavLink>
                <NavLink href="/qui">Qui Suis-je ?</NavLink>
                <NavLink href="/projet">Mes Projets</NavLink>
                <NavLink href="/contact">Me contacter</NavLink>
            </Nav>

            <BurgerButton onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}>
                {mobileNavIsOpen ? <XIcon /> : <MenuIcon />}
            </BurgerButton>
            {mobileNavIsOpen && (
                <MobileNav>
                    <NavLink href="/">Acceuil</NavLink>
                    <NavLink href="/qui">Qui Suis-je ?</NavLink>
                    <NavLink href="/projet">Mes Projets</NavLink>
                    <NavLink href="/contact">Me contacter</NavLink>
                </MobileNav>
            )}
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;

const Nav = styled.nav`
    display: none;

    @media (min-width: 830px) {
        display: flex;
        align-items: center;
    }
`;
const MobileNav = styled.nav`
    position: sticky;
    right: 0;
    transform: translateX(0);
    background-color: red;
`;

const BurgerButton = styled(WhiteButton)`
    display: block;
    @media (min-width: 830px) {
        display: none;
    }
`;
