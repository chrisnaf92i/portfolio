import Link from 'next/link';
import styled from 'styled-components';

export const PrimaryTitle = styled.h1`
    margin: 0px;
    color: black;

    text-decoration: none;
    font-weight: bold;
    font-size: 32px;
`;

export const SecondaryTitle = styled.h2`
    margin: 0px;
    font-size: 28px;

    color: black;
`;

export const TerciaryTitle = styled.h3`
    margin: 0px;
    font-size: 24px;
    color: black;
`;

export const NavLink = styled(Link)`
    margin: 0 8px;
    color: black;
    text-decoration: none;
    font-weight: bold;
`;

export const Paragraph = styled.p`
    margin: 0px;
    color: black;
`;
