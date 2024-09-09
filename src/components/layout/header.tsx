'use client';
import colors from '@/utils/colors';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
    const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);
    return (
        <StyledHeader>
            <h1>Christopher Nafrere</h1>
            <Nav>
                <BurgerButton
                    onClick={() => setOpenBurgerMenu(!openBurgerMenu)}
                >
                    <MenuIcon
                        color={colors.white}
                        size={32}
                    />
                </BurgerButton>

                {openBurgerMenu && (
                    <ul className="mobile-menu">
                        <li>
                            <Link href="/">Acceuil</Link>
                        </li>
                        <li>
                            <Link href="/projects">Mes projets</Link>
                        </li>
                        <li>
                            <Link href="/a-propos"> A propos </Link>
                        </li>
                        <li>
                            <Link href="/contact">Me contacter</Link>
                        </li>
                    </ul>
                )}
                <ul className="pc-menu">
                    <li>
                        <Link href="/">Acceuil</Link>
                    </li>
                    <li>
                        <Link href="/projects">Mes projets</Link>
                    </li>
                    <li>
                        <Link href="/a-propos"> A propos </Link>
                    </li>
                    <li>
                        <Link href="/contact">Me contacter</Link>
                    </li>
                </ul>
            </Nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 16px;
    box-sizing: border-box;
    h1 {
        margin: 0;
    }
`;

const Nav = styled.nav`
    .pc-menu {
        display: none;

        li {
            margin: 8px;

            a {
                font-size: 24px;
            }
        }
    }

    li {
        margin: 8px;

        a {
            font-size: 24px;
        }
    }

    .mobile-menu {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateY(100%);
    }

    @media (min-width: 875px) {
        .mobile-menu {
            display: none;
        }
        .pc-menu {
            display: flex;
        }
    }
`;

const BurgerButton = styled.button`
    background: none;

    @media (min-width: 875px) {
        & {
            display: none;
        }
    }
`;

export default Header;
