'use client';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <h1>Christopher Nafrere</h1>
            <Nav>
                <ul>
                    <li>
                        <Link href="/">Acceuil</Link>
                    </li>
                    <li>
                        <Link href="/projet">Mes projets</Link>
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
    align-items: baseline;

    h1 {
        margin: 0;
    }
`;

const Nav = styled.nav`
    ul {
        display: flex;

        li {
            margin: 8px;

            a {
                font-size: 24px;
            }
        }
    }
`;

export default Header;
